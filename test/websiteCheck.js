;
var chai = require('chai');  
var assert = require('chai').assert
const URL = 'http://127.0.0.1/bizanalyserservice/';
var httpntlm = require('httpntlm');

let webPages =[{name:'basePage',endURL:'',statusCode:'200',pass:''},
    {name:'MRAServer',endURL:'mraserver',statusCode:'400',pass:''}]

    var username ='aaron'
    var localMachineName ='WOMBAT';
    var encryptedLocalMachinePassword = new Buffer([ 43, 62, 12, 170, 200, 47, 245, 211, 105, 27, 138, 39, 153, 115, 76, 208 ]);
    var encryptedNetworkPassword = new Buffer([ 21, 248, 36, 209, 102, 180, 83, 108, 76, 153, 246, 164, 249, 74, 105, 215 ]);

describe('Test website behaviour per user', () =>{
    var parameters =
                {    
                    url:URL,     
                    username: username,
                    lm_password: encryptedLocalMachinePassword,
                    nt_password: encryptedNetworkPassword,
                    workstation: localMachineName            
                };  
    let processTestData = function(data, callback){
        for (let i=0; i<data.length;i++){
            httpntlm.get(parameters,
                function(err,response) 
                {
                    if(err) console.log(err);
                    if(response){
                           if(typeof callback === "function")
                                {
                                    callback(response,data[i]);
                                }       
                            } 
                })     
            }
        }
        it(`test`, (done) => {
        processTestData(webPages,function(response,data){
            console.log(response.statusCode); 
            console.log(data.statusCode);
            assert.equal(response.statusCode, data.statusCode,'Status Code does not match');
            done();           
            })
        })

    })