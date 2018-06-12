var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var sql = function() {
 
    var config = {
        userName: 'sa',
        password: 'Password1',
        server: 'WOMBAT', // You can use 'localhost\\instance' to connect to named instance        
        //port:1433,
     
        options: {
            database: 'bizanalyser',
            encrypt: false // Use this if you're on Windows Azure
        }
    }

    var connection = new Connection(config); 

    this.sqlRead= function(sqlStatement){
        connection.on('connect', function(err) {
            if (err) {
              console.log(err);
            } else {
              console.log('Connected');
             Read(sqlStatement);
             
            }
          });
    } 

    function Read(sqlStatement,callback) { 
        request = new Request(sqlStatement,
        function(err, rowCount, rows) {
        if (err) {
            callback(err);
        } else {
            console.log(rowCount + ' row(s) returned');
            callback(null);
        }
        });
    
        // Print the rows read
        var result = "";
        request.on('row', function(columns) {
            columns.forEach(function(column) {
                if (column.value === null) {
                    console.log('NULL');
                } else {
                    result += column.value + " ";
                }
            });
            console.log(result);
            result = "";
        });
        
        connection.execSql(request);
  }




}

module.exports = new sql();