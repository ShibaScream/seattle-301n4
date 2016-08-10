(function(module) {
  function Article (opts) {
    // DONE: Convert property assignment to Functional Programming style. Now, ALL properties
    // of `opts` will be assigned as properies of the newly created article object.
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    },this);
  }

  Article.all = [];

  Article.prototype.toHtml = function() {
    var template = Handlebars.compile($('#article-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    this.body = marked(this.body);

    return template(this);
  };

  Article.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS articles (id INTEGER PRIMARY KEY ASC, title VARCHAR(100) NOT NULL, category VARCHAR(100) NOT NULL, author VARCHAR(100) NOT NULL, authorURL VARCHAR(200) NOT NULL, publishedOn DATE, body TEXT);', // what SQL command do we run here inside these quotes?
      function(result) {
        console.log('Successfully set up the articles table.', result);
        if (callback) callback();
      }
    );
  };

  Article.truncateTable = function(callback) {
    webDB.execute(
      'DELETE * FROM articles;',
      callback
    );
  };

  Article.prototype.insertRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO articles (title, category, author, authorURL, publishedOn, body) VALUES (?, ?, ?, ?, ?, ?);',
          'data': [this.title, this.category, this.author, this.authorURL, this.publishedOn, this.body],
        }
      ],
      callback
    );
  };

  Article.prototype.deleteRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql':'DELETE FROM articles WHERE id  = ?;',
          'data': [this.id],
        }
      ],
      callback
    );
  };

  Article.prototype.updateRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql':'UPDATE articles SET (title, category, author, authorURL, publishedOn, body) VALUES (?, ?, ?, ?, ?, ?) WHERE id = ?; ',
          'data': [this.title, this.category, this.author, this.authorURL, this.publishedOn, this.body, this.id],
        }
      ],
      callback
    );
  };

  // DONE: Refactor to expect the raw data from the database, rather than localStorage.
  Article.loadAll = function(rows) {
    Article.all = rows.map(function(ele) {
      return new Article(ele);
    });
  };

  Article.fetchAll = function(callback) {
    webDB.execute('SELECT * FROM articles;', function(rows) {
      if (rows.length) {
        
        Article.loadAll(rows);

        callback();
      } else {
        $.getJSON('/data/hackerIpsum.json', function(rawData) {
          // Cache the json, so we don't need to request it next time:
          rawData.forEach(function(item) {
            var article = new Article(item); // Instantiate an article based on item from JSON
            
            article.insertRecord();
          });
          // Now get ALL the records out the DB, with their database IDs:
          webDB.execute('SELECT * FROM articles', function(rows) { // TODO: select our now full table
            
            Article.loadAll(rows);

            callback();
          });
        });
      }
    });
  };

  Article.allAuthors = function() {
    return Article.all.map(function(article) {
      return article.author;
    })
    .reduce(function(names, name) {
      if (names.indexOf(name) === -1) {
        names.push(name);
      }
      return names;
    }, []);
  };

  Article.numWordsAll = function() {
    return Article.all.map(function(article) {
      return article.body.match(/\b\w+/g).length;
    })
    .reduce(function(a, b) {
      return a + b;
    });
  };

  Article.numWordsByAuthor = function() {
    return Article.allAuthors().map(function(author) {
      return {
        name: author,
        numWords: Article.all.filter(function(a) {
          return a.author === author;
        })
        .map(function(a) {
          return a.body.match(/\b\w+/g).length
        })
        .reduce(function(a, b) {
          return a + b;
        })
      }
    })
  };

  Article.stats = function() {
    return {
      numArticles: Article.all.length,
      numWords: Article.numwords(),
      Authors: Article.allAuthors(),
    };
  }

  module.Article = Article;
})(window);
