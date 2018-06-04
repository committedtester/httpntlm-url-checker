var httpMethods = function() 
{
    this.processTestData = function(iteration, callback ){
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

module.exports = new httpMethods();