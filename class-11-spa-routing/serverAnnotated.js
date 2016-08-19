//load the express and express-request-proxy modules from Node and assign them to variables
var requestProxy = require('express-request-proxy'),
  express = require('express');

//designate a port to serve the app on.
//It can be specified with the PORT environment variable OR default to port 3000
var port = process.env.PORT || 3000;

//instantiate express so we have access to the express app object and all its functionality
var app = express();

// call this function to handle any request to the GitHub domain
var proxyGitHub = function(request, response) {
  //request.params[0] = users/brookr/repos
  console.log('Routing GitHub request for', request.params[0]);

  //make this GET request with express-request-proxy so we can pass our GITHUB_TOKEN
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
  }))(request, response);
};

//check all GET requests to see if they match the '/github/' route.
//if they do, call the proxyGitHub function
app.get('/github/*', proxyGitHub);

//serve static files from the project home directory
app.use(express.static('./'));

//check all get requests that haven't been caught by the GH route
app.get('*', function(request, response) {
  console.log('New request:', request.url);

  //no matter what the request is, respond by sending index.html
  response.sendFile('index.html', { root: '.' });
});

//start the server!
app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
