(function(module) {

  // TODO: Write the code to populate your filters, and enable the search queries here in search.js
  // TODO: You will also interact with the map.js file here
  var searchView = {};
  searchView.populateFilters = function () {
    webDB.execute('SELECT state FROM zips;', function(rows) {
      searchView.loadAll('state-select', 'state', rows);
      // ADD event listener to state
      $('#state-select').on('change', function() {
        console.log($(this).val());
        if ($(this).val().length > 0) {
          webDB.execute(
            [
              {
                'sql': 'SELECT city FROM zips WHERE state = ?;',
                'data': [$(this).val()]//may have to change this value
              }
            ],
            function (rows) {
              searchView.loadAll('city-select', 'city', rows);
              $('#city-select').on('change', function() {
                //add marker drop
              });
            }
          );
        }
      });
        // EVENT LISTENER calls webDB.execute to select cities from zip where state equals return value from event listener
          // run loadAll to add cities to filter
    });
  };

  searchView.loadAll = function(id, option, rows) {
    var $filter = $('#' + id);
    var results = rows.map(function (row) {
      return row[option];
    }).filter(function (result, i, arr) {
      return arr.indexOf(result) === i;
    });
    results.sort();
    results.map(function (result) {
      var optiontag = '<option value="' + result + '">' + result + '</option>';
      $filter.append(optiontag);
    });
  };

  $('#search').on('submit', function(event) {
    event.preventDefault();
    var $result = $('input[name="zip"]').val();
    console.log($result);
//add integer validation
    webDB.execute(
      [
        {
          'sql':'SELECT * FROM zips WHERE zip = ?;',
          'data': [$result]
        }
      ],
      function(rows) {
        console.log(rows);  //marker drop
      }
    );
  });


  searchView.populateFilters();
})(window);
