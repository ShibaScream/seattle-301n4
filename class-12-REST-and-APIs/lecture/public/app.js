$.ajax({
  url: 'https://api.github.com/user/repos?sort=updated&per_page=10',
  type: 'GET',
  headers: {
    Authorization: 'token ' + githubToken
  }
}).done(function(data) {
  data.filter(function(ele) {
    return ele.owner.login === 'sjschmidt44';
  }).forEach(function(repo) {
    var output = '<h2>' + repo.name + '</h2>' +
      '<p>' + repo.description + '</p>';
    $('#repos').append(output);
  })
});
