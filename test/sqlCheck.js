var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
//var async = require('async');
var sqlMethods =require('../helperMethods/sql');


describe('Test sqldatabase', () =>{  
 
    it.only(`Check mssql package works`, () => {  

    var countCustomers ='select count(*) from dbo.FinancialData1404';  
    sqlMethods.sqlRead(countCustomers);

    })
})



/*
function executeStatement() {
        request = new Request("select count(*) from dbo.FinancialData1404", function(err, rowCount) {
          if (err) {
            console.log(err);
          } else {
            console.log('Connected');
            console.log(rowCount + ' rows');
          }
        });
    
        request.on('row', function(columns) {
          columns.forEach(function(column) {
            console.log(column.value);
          });
        });
    
        connection.execSql(request); 




    var sqlSelect = new Promise(function(resolve,reject) {
        sql.connect(config).then(pool => 
            {           
                console.log(pool);
                return pool.request()
                .query(countCustomers)
            }).then(result =>
                {
                    resolve(result);
                }),
                function(err)
                {
                    //console.log(err);
                    reject(err);
                }
            ,function (err){
                //console.log(err);
                reject(err);
            }
    })


    //   https://github.com/tediousjs/node-mssql/issues/457
    

    it.only(`Check mssql package works`, () => {  

    sqlSelect.then(function(result){
        console.log(result);
        },
        function(err){
            console.log(err)
        });   
    })

})

    */
