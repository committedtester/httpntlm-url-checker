var http =require('../helperMethods/http');
var websiteArray = require('../testData/websiteArray.js');
let adminUserwebPages = websiteArray.adminUser;

describe('Test website behaviour for admin user', () =>{
    for (let i=0; i<adminUserwebPages.length;i++)
    {  
        it(`Test${i+1}: ${adminUserwebPages[i].name} should return status code ${adminUserwebPages[i].statusCode}`, (done) => {
        http.processTestData(adminUserwebPages[i],function(response){
            done();
        });
        })
    }
})