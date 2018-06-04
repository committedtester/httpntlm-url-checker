var youruserName ='yourUserName'; //just the user, no domain/workstation
var yourPassword ='yourPassword';
var yourWorkstation ='yourWorkStation';
var yourDomain ='yourDomain';
var httpntlm = require('httpntlm');
var ntlm = httpntlm.ntlm;

// Creates a buffer which contains your hashed password
var lm = ntlm.create_LM_hashed_password(yourPassword);
var nt = ntlm.create_NT_hashed_password(yourPassword);

console.log('The following lines are your hashed passwords');
console.log('lm numeric array: '+Array.prototype.slice.call(lm, 0));
console.log('nt numeric array: '+Array.prototype.slice.call(nt, 0));

//Test the provided hashed passwords by overwriting the following Buffer Arrays with the values in the console
lm = new Buffer([ 43,62,12,170,200,47,245,211,251,208,189,169,161,136,164,187 ]);
nt = new Buffer([ 111,47,211,5,226,211,17,239,225,58,109,38,114,27,181,120 ]);

httpntlm.get({
    url: 'http://127.0.0.1/bizanalyserservice',
    username: youruserName,
    lm_password: lm,
    nt_password: nt,
    workstation: yourWorkstation,
    domain: yourDomain
}, function (err, res){
    if(err) 
    {console.log(err);
        return err;
    }
    else{        
        console.log(res.statusCode);
        //Uncomment the following for debugging
        //console.log(res.headers);
        //console.log(res.body);
    }

});


