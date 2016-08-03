# Your professional online presence

You will create, from scratch, a static portfolio site (no "backend server" code required), to represent your personal online presence. It will highlight your projects and your interests, and showcase your skills to potential employers or clients. You may not have much content to populate the site with, so focus on laying a solid foundation that will allow the portfolio to grow as you complete more projects. Think about what kinds of information would be useful to display for each project (both for yourself and for prospective employers), then model your data and create your styling accordingly.

Some hints to get going:

- Start a fresh new repository for this project on GitHub.
- This app will be structured very similarly to the blog code you worked with in your pair assignment. Some of the technical requirements (particularly the JavaScript portions) will closely mirror the requirements for the blog, so it is not expected that you create new ways to solve all of these problems. Even if a particular solution could be directly translated from the blog, take the time to write out the code so you understand exactly how it works.
- Start with a **rough** pen & paper "wireframe" sketch of what you want your portfolio site to look like. You are expected to create completely original styling for your portfolio, so take the time to decide how you want the portfolio to look. The more specificity you can provide, the easier it will be to write the CSS. You can always modify the styling as you progress, but it's very hard to create styling if you don't have a clear picture of how the finished product should look and behave.
- Work through as many of the user stories as you can, but always submit what you have by the due date. Don't let "if only..." ideas keep you from turning something in!
- Add the [.eslintrc](https://github.com/codefellows/sea-301d1/blob/master/.eslintrc) config file to the root of your repo, so we are all using the same linter settings.
- Also add a .gitignore file so your vendor files don't get added to the repo.

## User Stories: Minimum Viable Product (MVP)
Let these user stories guide your development:
 - As a developer, I want my site to use valid and semantic markup, so that employers will love me.
 - As the creator, I want the page to link to my social and GitHub pages, so that visitors can follow me and I can build my audience.
 - As a developer, I want portfolio items displayed with a repeatable template, so that I can reuse it, and abstract out the details for individual projects.

## User Stories: Stretch Goals
1. As a visitor, I want the site to look reasonable, so that I can read it on any device.
1. As a visitor, I want the portfolio to show the newest projects on top so that I can easily see the developers recent work.
- As a visitor, I want relative timestamps on projects to give me a idea of how many days ago something was created.


## Technical Requirements and Grading Rubric

  - Use good Object Oriented code: Create a constructor function for projects that contains properties appropriate for a portfolio project.
  - Leave as little in the `window` (global) namespace as possible: attach functions to objects, etc.
  - Use jQuery to `clone` the example markup for each project, as you add additional content.
  - Your Project prototype should have a `.toHtml()` function that adds new data to the DOM.
  - To make it look better, include basic styles: a CSS reset, content in a single centered column, reasonable margins, etc. Write all CSS from scratch.
