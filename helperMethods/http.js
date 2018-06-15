var httpntlm = require('httpntlm');

var os = require('os');
let osUserName =os.userInfo().username
let localMachineName =os.hostname();
let encryptedLocalMachinePassword = new Buffer([43, 62, 12, 170, 200, 47, 245, 211, 105, 27, 138, 39, 153, 115, 76, 208]); //eslint-disable-line
let encryptedNetworkPassword = new Buffer([21, 248, 36, 209, 102, 180, 83, 108, 76, 153, 246, 164, 249, 74, 105, 215]); //eslint-disable-line

var Http = function() {

    this.processTestData = function(iteration,callback){
        httpntlm.get(
            {
            'lm_password': encryptedLocalMachinePassword,
            'nt_password': encryptedNetworkPassword,
            'url': iteration.endURL,     
            'username': osUserName,
            'workstation': localMachineName            
            },            
                function (err,response) 
                {
                    if (err){ 
                        console.log(err); 
                        }                   
                    if (response){                    
                        return callback(response);
                    }

                    return console.log('No response');  
                }
        )     
    } 
}

module.exports = new Http();