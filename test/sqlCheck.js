var sqlMethods =require('../helperMethods/sql');

describe('Test sqldatabase', () =>{  
 
    it.only(`Check mssql package works`, () => { 
    var countCustomers ='select count(*) from dbo.FinancialData1404';  
    sqlMethods.sqlRead(countCustomers);

    })
})