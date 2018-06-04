# This code is provided for demonstration. It is coupled tightly to a local test IIS server. 
# However it should be possible to modify for other IIS server's and other websites

#FIRST THING
# You will need to generate an encrypted password for your local windows user
# Modify the file called 'encryptPassword.js'. Modify the first line marked var yourPassword
# Run the following in your terminal 'node encryptPassword.js'


# Note the use of 127.0.0.1 to allow for debugging on local machine while external network connections are not available

# Considered the use of the bluebird package
