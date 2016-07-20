var articles = [];

function Article (opts) {
    this.title = opts.title;
    this.category = opts.category;
    this.authorUrl = opts.authorUrl;
    this.publishedOn = opts.publishedOn;
    this.body = opts.body;
    this.author = opts.author;
}

Article.prototype.toHtml = function() {
    var $newArticle = $('article.template').clone();

    $newArticle.attr('data-category', this.category);
    // TODO: Use jQuery to fill in the template with properties
    // from this particular Article instance. We need to fill in:
    // the author name and url, the article title and body, and the
    // publication date.

    // Add title
    $newArticle.find('h1').html(this.title);

    // Add author & url
    $newArticle.find('address > a').html(this.author);
    $newArticle.find('address > a').attr('href', this.authorUrl);
    
    // add body
    $newArticle.find('.article-body').html(this.body);

    // Include the publication date as a 'title' attribute to show on hover:
    $newArticle.find('time[pubdate]').attr('title', this.publishedOn);

    // Display the date as a relative number of "days ago":
    $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

    $newArticle.append('<hr>');

    // remove template class
    $newArticle.removeClass('template');

    return $newArticle;
}

rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
    articles.push(new Article(ele));
})

articles.forEach(function(a){
    $('#articles').append(a.toHtml())
});
