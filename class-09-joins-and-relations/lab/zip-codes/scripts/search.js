(function(module) {

  // TODO: Write the code to populate your filters, and enable the search queries here in search.js
  // TODO: You will also interact with the map.js file here
  var searchView = {};
  
  searchView.populateFilters = function () {
    webDB.execute('SELECT state FROM zips;', function(rows) {
      searchView.loadAll('state-select', 'state', rows);
      // ADD event listener to state
      $('#state-select').on('change', function() {
        $('#city-select').val('');
        $('#city-select').slice(1).remove();
        var $state = $(this).val();
        if ($state.length > 0) {
          webDB.execute(
            [
              {
                'sql': 'SELECT city FROM zips WHERE state = ?;',
                'data': [$state]
              }
            ],
            function (rows) {
              searchView.loadAll('city-select', 'city', rows);
              $('#city-select').on('change', function() {
                var $city = $(this).val();
                //add marker drop
                searchView.searchAndAddMarker(['city', 'state'], [$city, $state]);
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
    //add integer validation
    searchView.searchAndAddMarker(['zip'], [$result]);
  });

  searchView.searchAndAddMarker = function (joinsArr, filtersArr) {
    var parameters = joinsArr.reduce(function(prev, current, index) {
      current += ' = ?';
      if (index > 0) {
        current = ' AND ' + current;
      }
      return prev + current
    }, '');
    
    console.log(parameters);
    
    webDB.execute(
      [
        {
          'sql':'SELECT * FROM zips WHERE ' + parameters,
          'data': filtersArr
        }
      ],
      function(rows) {
        // DEBUG
        console.log(rows);
        //marker drop
        rows.forEach(function(row) {
          createMarker(row);
        });
    });
  };
  
  searchView.populateFilters();
})(window);
