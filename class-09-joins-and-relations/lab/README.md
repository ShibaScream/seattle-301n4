# Mapping database records to Google Maps
This is a pair programming exercise. Please work with your partner to complete this assignment.

*NOTE: Upon opening the starter code with Live Server, it will take your machine approx. 30 seconds to build the table in WebDB. You can see the progress in the dev console.*

### Outcome:
Your goal with this assignment is to exercise your sql query skills in working with a large dataset. You will wire up this app to retrieve information from the DB to populate the search filters, and then apply your search parameters to query the DB again and apply the result to a Google Map marker on the page.


1. Create a google maps API key [Click here](https://developers.google.com/maps/documentation/javascript/) and scroll down the page until you see the 'Create API Key' link.
  - Add your API key to the script tag in `index.html`, and ensure that your map is rendering in its basic form.
2. Populate the select elements for State and City using data from the WebDB table.
  - The DB has already been populated from the `zips.js` file in the `/data/` directory.
  - Don't create an object constructor and filter results from a collection of object instances.
  - Instead, query the database to get the list of all states on page load, and then query the database again to get a list of cities once the user selects a state. Log the list of matching cities to the console.
3. Wire up the zip code search to pull data from the DB and log matching objects to the console (while debugging).
  - You will need to write your SQL queries for a direct search of the db using the zip.
  - You have the `webDB.execute()` method from the blog available to you for accessing the DB table for this assignment.
4. Be sure to include error-handling logic to deal with invalid search terms and searches that return no results.
5. Use the results of either search query (zip OR city/state) to reset the central location on the map, and place a google maps marker on the map.
  - The API docs for Google Maps will be your friend [Marker API Docs](https://developers.google.com/maps/documentation/javascript/markers#add)
  - NOTE: The data returned to you will be in the form of `{longitude, latitude}`. Google Maps is expecting `{latitude: val, longitude: val}`. Please handle that appropriately.

### Stretch Goals:

6. Implement additional information in each marker. For example, render all of the data from the DB query into the marker, or add your own unique data from another source?
7. Dig into the marker customization in other ways... Change the color, style, animation.


## Submitting your work

Follow the usual process for submitting your work by creating a PR back to upstream, and then submitting a link to your PR in Canvas.
