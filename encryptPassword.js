var youruserName ='bob'; //just the user, no domain/workstation
var yourPassword ='password';
var yourWorkstation ='workstation';
var yourDomain ='yourDomain';
var httpntlm = require('httpntlm');
var ntlm = httpntlm.ntlm;

// Creates a buffer which contains your hashed password
var lm = ntlm.create_LM_hashed_password(yourPassword);
var nt = ntlm.create_NT_hashed_password(yourPassword);

console.log('lm :'+lm);
console.log('nt :'+nt);

console.log('Converted to numeric array');
console.log('lm numeric array: '+Array.prototype.slice.call(lm, 0));
console.log('nt numeric array: '+Array.prototype.slice.call(nt, 0));

//Take these values and overwrite the following Buffer Arrays
lm = new Buffer([ 43, 62, 12, 170, 200, 47, 245, 211, 105, 27, 138, 39, 153, 115, 76, 208 ]);
console.log('Test lm value being passed to httpnlm method :'+lm);
nt = new Buffer([ 21, 248, 36, 209, 102, 180, 83, 108, 76, 153, 246, 164, 249, 74, 105, 215 ]);
console.log('Test lm value being passed to httpnlm method :' +nt);


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
        console.log(res.headers);
        console.log(res.body);
    }

});


