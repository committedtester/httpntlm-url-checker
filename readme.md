* This code is provided for demonstration. It is coupled tightly to a local test IIS server. 
However it should be possible to modify for other IIS server's and other websites
* Note the use of 127.0.0.1 to allow for debugging on local machine while external network connections are not available

#STEP 1:Test your hashed credentia* 
* You will need to generate an encrypted password for your test windows user
* Modify the file called 'encryptPassword.js'. Modify the first lines accordingly
* Modify the url variable to be your IIS server
* Run the following in your terminal 'node encryptPassword.js'
* The first time the call to your website will fail
* Read the console to get the correct array values, then update the Buffer Arrays
* Run the following in your terminal 'node encryptPassword.js'
* You should now connect. Uncomment the lines in the else statement to see more information if neccessary

# STEP 2: UPDATE TESTS
* Tests are in the test folder. Note the header of the js file with the same variables. They are currently configured to use the local windows user and local machine. Please override if neccessary

# STEP 3: UPDATE TEST DATA
* There is a websiteArray.js file that contains the URL's and an associated expected status code. Override for your website

# STEP 4: RUN THE TEST
* Run in your terminal 'npm test'