var http =require('../helperMethods/http');
var websiteArray = require('../testData/websiteArray.js');
let adminUserwebPages = websiteArray.adminUser;

var chai = require('chai');  
var assert = require('chai').assert

describe('Test website behaviour for admin user', () =>{
    for (let i=0; i<adminUserwebPages.length;i++)
    {  
        it(`Test${i+1}: ${adminUserwebPages[i].name} should return status code ${adminUserwebPages[i].statusCode}`, (done) => {
        http.processTestData(adminUserwebPages[i],function(response){
            assert.equal(response.statusCode, adminUserwebPages[i].statusCode,'Status Code does not match');
            done();                 
        });
        })
    }
})