;
var chai = require('chai');  
var assert = require('chai').assert
const URL = 'http://127.0.0.1/bizanalyserservice/';
var httpntlm = require('httpntlm');
var websiteArray = require('../testData/websiteArray.js');
var httpMethods = require('../helperMethods/httpMethods.js');
var os = require("os");

let adminUserwebPages = websiteArray.adminUser;
let regionAdminUserwebPages = websiteArray.regionAdminUser;

var username =os.userInfo().username
var localMachineName =os.hostname();
var encryptedLocalMachinePassword = new Buffer([ 43, 62, 12, 170, 200, 47, 245, 211, 105, 27, 138, 39, 153, 115, 76, 208 ]);
var encryptedNetworkPassword = new Buffer([ 21, 248, 36, 209, 102, 180, 83, 108, 76, 153, 246, 164, 249, 74, 105, 215 ]);

describe('Test website behaviour for admin user', () =>{

    let processTestData = function(iteration,callback ){
        httpntlm.get({    
            url:iteration.endURL,     
            username: username,
            lm_password: encryptedLocalMachinePassword,
            nt_password: encryptedNetworkPassword,
            workstation: localMachineName            
        },            
                function(err,response) 
                {
                    if(err) console.log(err);
                    if(response){
                        assert.equal(response.statusCode, iteration.statusCode,'Status Code does not match');
                        if(typeof callback === "function")
                                {
                                    callback(response);
                                } 
                    } 
                })     
            } 

    for (let i=0; i<adminUserwebPages.length;i++)
    {  
        it(`Test${i+1}: ${adminUserwebPages[i].name} should return status code ${adminUserwebPages[i].statusCode}`, (done) => {
        processTestData(adminUserwebPages[i],function(response){
            done();
        });
        })
    }
})