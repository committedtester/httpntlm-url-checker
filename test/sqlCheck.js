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