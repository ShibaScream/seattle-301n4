(function (module) {

  var searchView = {};

  searchView.populateFilters = function () {
    webDB.execute('SELECT DISTINCT state FROM zips;', function (rows) {
      searchView.loadAll('state-select', 'state', rows);
      // ADD event listener to state
      $('#state-select').on('change', function () {
        $('#city-select').off();
        $('#city-select').val('');
        $('#city-select option:first-child').siblings().remove();
        var $state = $(this).val();
        if ($state.length > 0) {
          webDB.execute(
            [
              {
                'sql': 'SELECT DISTINCT city FROM zips WHERE state = ?;',
                'data': [$state]
              }
            ],
            function (rows) {
              searchView.loadAll('city-select', 'city', rows);
              $('#city-select').on('change', function () {
                var $city = $(this).val();
                if ($city !== '') {
                  //add marker drop
                  searchView.searchAndAddMarker(['city', 'state'], [$city, $state]);
                }
              });
            }
          );
        }
      });
    });
  };

  searchView.loadAll = function (id, option, rows) {
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

  $('#search').on('submit', function (event) {
    event.preventDefault();
    var $result = $('input[name="zip"]').val();
    if (typeof ($result) !== 'number' && $result.toString().length !== 5) {
      alert('Not a proper 5 digit zip code. Please try again!');
    } else {
      searchView.searchAndAddMarker(['zip'], [$result]);
    }
  });

  searchView.searchAndAddMarker = function (joinsArr, filtersArr) {
    var parameters = joinsArr.reduce(function (prev, current, index) {
      current += ' = ?';
      if (index > 0) {
        current = ' AND ' + current;
      }
      return prev + current;
    }, '');

    webDB.execute(
      [
        {
          'sql': 'SELECT * FROM zips WHERE ' + parameters,
          'data': filtersArr
        }
      ],

      function (rows, result) {
        if (result.rows.length > 0) {
          removeMarkers();
          rows.forEach(function (row) {
            createMarker(row);
          });
        } else if (result.rows.length === 0) {
          alert("Hmm. Appears you don't have any results. :(");
        }
      }
    );
  };

  module.searchView = searchView;
  
})(window);
