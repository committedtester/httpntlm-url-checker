;
var chai = require('chai');  
var assert = require('chai').assert
const URL = 'http://127.0.0.1/bizanalyserservice/';
var httpntlm = require('httpntlm');

let webPages =[{name:'basePage',endURL:'http://127.0.0.1/bizanalyserservice/',statusCode:'200',pass:''},
    {name:'MRAServer',endURL:'http://127.0.0.1/bizanalyserservice/mraserver2',statusCode:'404',pass:''}]

    var username ='aaron'
    var localMachineName ='WOMBAT';
    var encryptedLocalMachinePassword = new Buffer([ 43, 62, 12, 170, 200, 47, 245, 211, 105, 27, 138, 39, 153, 115, 76, 208 ]);
    var encryptedNetworkPassword = new Buffer([ 21, 248, 36, 209, 102, 180, 83, 108, 76, 153, 246, 164, 249, 74, 105, 215 ]);

describe('Test website behaviour per user', () =>{
 
    let processTestData = function(iteration, callback ){
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


    for (let i=0; i<webPages.length;i++)
    {  
        it(`Test${i+1}: ${webPages[i].name} should return status code ${webPages[i].statusCode}`, (done) => {
        processTestData(webPages[i],function(response){
            done();
        });
        })
    }
})