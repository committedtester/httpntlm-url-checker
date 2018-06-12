const sql = require('mssql')


describe('Test sqldatabase', () =>{

    const config = {
        user: 'sa',
        password: 'Password1',
        server: 'WOMBAT', // You can use 'localhost\\instance' to connect to named instance
        database: 'bizanalyser',
        port:1433,
     
        options: {
            encrypt: false // Use this if you're on Windows Azure
        }
    }

    var countCustomers ='select count(*) from dbo.FinancialData1404';

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
