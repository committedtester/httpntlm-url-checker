const URL = 'http://127.0.0.1/bizanalyserservice';
var httpntlm = require('httpntlm');
var chai = require('chai');  
var assert = require('chai').assert

var username ='aaron'
var localMachineName ='WOMBAT';
var encryptedLocalMachinePassword = new Buffer([ 43, 62, 12, 170, 200, 47, 245, 211, 105, 27, 138, 39, 153, 115, 76, 208 ]);
var encryptedNetworkPassword = new Buffer([ 21, 248, 36, 209, 102, 180, 83, 108, 76, 153, 246, 164, 249, 74, 105, 215 ]);

describe('Basic test for Website', () => {
    testVariable='Test1'
    it(`${testVariable} :Confirm Main URL`, (done) => 
    {
        const parameters =
        {    
            url:URL,     
            username: username,
            lm_password: encryptedLocalMachinePassword,
            nt_password: encryptedNetworkPassword,
            workstation: localMachineName            
        };
           
                httpntlm.get({    
                    url:URL,     
                    username: username,
                    lm_password: encryptedLocalMachinePassword,
                    nt_password: encryptedNetworkPassword,
                    workstation: localMachineName            
                },
                function(err,data) 
                {
                    console.log(data.statusCode);
                    assert.equal(data.statusCode, 400)
                    done();
                })
            });
       
});


