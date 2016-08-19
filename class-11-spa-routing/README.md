# Assignment for Class 11 - Routing and Single Page Apps

At the heart of every web app is the Web Request-Response Cycle. Pay close attention to how your app is creating and responding to requests. With client-side routing and the History API, we can add a layer of abstraction on top of the traditional routing.

## Daily Plan:
1. Code Review - how did the refactor go?
2. Controller
3. Routing & SPA
4. Page.js
5. Final Projects Intro

## Controller

- finally, the MVC trifecta is complete
- controllers mediate between views & models
- the server acts as a controller for the whole app
- create a controller for each major view that might be requested
- when a request is made, trigger the necessary functions to fetch/manipulate data, render views, and instantiate behavior (e.g. event listeners)

## Routing & SPA

- routes = the public API
```
GET: /
GET: /about
GET: /articles/42
GET: /articles/42/edit
PUT: /articles/42
```

- use the URL to to derive app state & define requests
  - `hipmunk.com/flights#f=SEA;t=HNL;d=2015-12-22`
  - use ajax & JS to create the requested views
  - avoid HTTP requests
- need a way to access browser history

## The History API
- available via `window.history`
- [docs!](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- manipulate history without loading new pages
  - `history.pushState()`
    - add an entry to the history object
    - can pass a state object & URL for that entry

## Client-side Routing

Page.js

- Client-side routing library based on the Express router
- source code is now in `starter-code/vendor/scripts`
- now we need Express
  - `npm install` to add Express to your project
  - `server.js` handles requests and lets page.js operate
  - run your code using `node server.js`, not `live-server`

**Usage**
- define route handlers and callbacks in `routes.js`

```javascript
//define a route
page('/', indexController.init)
page('/users', usersController.init)

//define a fallback for any unhandled routes
page('*', epicfail)

//instantiate page.js
page()
```


## Final-Project Preview

- projects should use proper MVC separation, SPA architecture with routing, responsive design & SMACSS, data persistence, ajax & templating as appropriate, and must be deployed via Heroku or similar
- pitches during class 13 & 14

examples:
[You Are Hungry](https://youarehungry.herokuapp.com/)
[My Funny Friend and Me](https://myfunnyfriendandme.herokuapp.com/)

## Helpful Resources
- What is a Single-Page Application (SPA), with live demo: http://www.johnpapa.net/pageinspa/
- Gallery of example SPAs: https://onepagelove.com/gallery/application
- Page.js docs: https://visionmedia.github.io/page.js

## Class Videos
[Part 1]()
[Part 2]()
[Part 3]()
