// Pass in to the IIFE a module, upon which objects can be attached for later access.
(function (module) {
  
  function Article(opts) {
    this.author = opts.author;
    this.authorUrl = opts.authorUrl;
    this.title = opts.title;
    this.category = opts.category;
    this.body = opts.body;
    this.publishedOn = opts.publishedOn;
  }

  Article.all = [];

  Article.prototype.toHtml = function () {
    var template = Handlebars.compile($('#article-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    this.body = marked(this.body);

    return template(this);
  };

  Article.loadAll = function (rawData) {
    rawData.sort(function (a, b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });

    // DONE: Refactor this forEach code, by using a `.map` call instead, since what we are trying to accomplish
    // is the transformation of one colleciton into another.
    // rawData.forEach(function(ele) {
    //   Article.all.push(new Article(ele));
    // })
    Article.all = rawData.map(function (ele) {
      return new Article(ele);
    });
  };

  Article.fetchAll = function (showPage) {
    if (localStorage.rawData) {
      Article.loadAll(JSON.parse(localStorage.rawData));
      showPage();
    } else {
      $.getJSON('/data/hackerIpsum.json', function (rawData) {
        Article.loadAll(rawData);
        localStorage.rawData = JSON.stringify(rawData); // Cache the json, so we don't need to request it next time.
        showPage();
      });
    }
  };

  // TODO: Chain together a `map` and a `reduce` call to get a rough count of all words in all articles.
  Article.numWordsAll = function () {
    return Article.all.map(function (article) {
      return article.body.replace( /\n/g, " " ).split(' ').length; // Get the total number of words in this article
    })
    .reduce(function (a, b) {
      return a + b; // Sum up all the values in the collection
    }, 0);
  };

  // TODO: Chain together a `map` and a `reduce` call to produce an array of unique author names.
  Article.allAuthors = function () {
    return Article.all.map(function (article) {
      return article.author;
    }).filter(function (author, i, arr) {
      return arr.indexOf(author) === i;
    });
  }; // Don't forget to read the docs on map and reduce!

  Article.numWordsByAuthor = function () {
    // TODO: Transform each author string into an object with 2 properties: One for
    // the author's name, and one for the total number of words across all articles written by the specified author.
    return Article.allAuthors().map(function (author) {
      return {
        name: author,
        numWords: Article.all.filter(function(article) {
          return article.author === author;
        }).map(function (article) {
            return article.body.replace( /\n/g, " " ).split(' ').length;
        }).reduce(function (a, b) {
          return a + b;
        }, 0)
        // someKey: someValOrFunctionCall().map(...).reduce(...), ...
      };
    });
  };

  module.Article = Article;
  
})(window);
