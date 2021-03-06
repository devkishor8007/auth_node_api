# auth_node_api
This repo is Auth Node.js Api [Backend Server]

# Running Locally

#### Make sure you have Node.js and the Heroku CLI installed.
     $ git clone https://github.com/devkishor8007/auth_node_api.git # or clone your own fork
     $ cd node_auth_api
     $ npm i
     $ npm i -g nodemon
     create a .env file then type 
        MONGO_URL=<yourMongoDBURlLink> 
        SECRET=<yours_secret_key>
     
     $ nodemon index.js
     
#### Note: Before doing ```$ nodemon index.js```, you must do one thing that is Open the Redis Server and if you have not Redis DB in your system then do download.

Your app should now be running on ```localhost:5000```

#### For the login User Data  || You need the token [Check in Postman] as Header("x-auth-token" : <token_key>);
    http://localhost:5000/

#### For Login Method [Check in Postman]
    http://localhost:5000/login

#### For Signup Method [Check in Postman]
   http://localhost:5000/signup

#### For Logout Method [Check in Postman]
    http://localhost:5000/logout
    
### In Postman, Set the Headers Like this - ```x-auth-token``` and ```add your own token key```
![image](https://user-images.githubusercontent.com/73419211/126860304-799c9d71-5940-41de-986d-1a08d8b5188c.png)

 ##
 Note: ```You must have install the Redis in your OS.```
##

## Documentation
[Node.js Guide](https://nodejs.org/en/docs/)<br>
[Express.js Guide](https://expressjs.com/en/starter/installing.html)<br>
[Mongoose Guide](https://mongoosejs.com/docs/guide.html)<br>
[MongoDb Guide](https://docs.mongodb.com/)
[Redis Guide](https://redis.io/documentation)
