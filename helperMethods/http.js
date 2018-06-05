var chai = require('chai');  
var assert = require('chai').assert
var httpntlm = require('httpntlm');

var os = require("os");
let username =os.userInfo().username
let localMachineName =os.hostname();
let encryptedLocalMachinePassword = new Buffer([ 43, 62, 12, 170, 200, 47, 245, 211, 105, 27, 138, 39, 153, 115, 76, 208 ]);
let encryptedNetworkPassword = new Buffer([ 21, 248, 36, 209, 102, 180, 83, 108, 76, 153, 246, 164, 249, 74, 105, 215 ]);


var http = function() {

    this.processTestData = function(iteration,callback ){
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
}

module.exports = new http();


 