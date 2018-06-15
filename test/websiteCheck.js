var http =require('../helperMethods/Http');
var websiteArray = require('../testData/websiteArray.js');
let adminUserwebPages = websiteArray.adminUser;

var assert = require('chai').assert

describe('Test website behaviour for admin user', function() {
    for (let i=0; i<adminUserwebPages.length;i++)
    {  
        this.timeout(10000)
        this.slow(5000)
        it(`Test${i+1}: ${adminUserwebPages[i].name} should return status code ${adminUserwebPages[i].statusCode}`, (done) => {
        http.processTestData(adminUserwebPages[i],function(response){
            assert.equal(response.statusCode, adminUserwebPages[i].statusCode,'Status Code does not match');
            done();                 
        });
        })
    }
})