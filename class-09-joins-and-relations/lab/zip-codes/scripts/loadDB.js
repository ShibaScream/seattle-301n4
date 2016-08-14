(function (module) {
  var zips = {};

  zips.createTable = function (callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS zips (' +
      'id SERIAL PRIMARY KEY, ' +
      'city VARCHAR(255) NOT NULL, ' +
      'state VARCHAR(255) NOT NULL, ' +
      'latitude INTEGER NOT NULL,' +
      'longitude INTEGER NOT NULL,' +
      'population INTEGER NOT NULL,' +
      'zip INTEGER NOT NULL)',
      function(result) {
        console.log('Successfully set up the zips table.', result);
        if (callback) callback();
      }
    );
  };

  zips.truncateTable = function (callback) {
    webDB.execute(
      'DELETE FROM zips;',
      callback
    );
  };

  zips.loadDB = function () {
    zips.createTable();

    webDB.execute('SELECT * FROM zips', function (rows) {
      if (rows.length) {
        module.searchView.populateFilters();
        return;
      } else {
        $.get('/data/zips.json')
        .done(function(data) {
          data.forEach(function(ele) {
            webDB.execute(
              [
                {
                'sql': 'INSERT INTO zips(city, state, latitude, longitude, population, zip) VALUES(?, ?, ?, ?, ?, ?);',
                'data': [ele.city, ele.state, ele.loc[1], ele.loc[0], ele.pop, ele.zip],
                }
              ],
              function(results) {
                
              });
            });
          
            module.searchView.populateFilters();
          
          });
      }
    });
    
  };
  
  module.zips = zips;
  
})(window);
