# auth_node_api
This repo is Auth Node.js Api [Backend Server]

# Running Locally

#### Make sure you have Node.js and the Heroku CLI installed.
     $ git clone https://github.com/devkishor8007/auth_node_api.git # or clone your own fork
     $ cd node_auth_api
     create a .env then type MONGO_URL = yourMongoDBURlLink
     $ nodemon index.js

Your app should now be running on ```localhost:5000```

#### For Get Data  || You need the token [Check in Postman]
    http://localhost:5000/

#### For Login Method [Check in Postman]
    http://localhost:5000/login

#### For Signup Method [Check in Postman]
   http://localhost:5000/signup

#### For Logout Method [Check in Postman]
    http://localhost:5000/logout
    
## In Postman, Set the Header Like this - ```o-auth-token``` and ```add your own token key```
![image](https://user-images.githubusercontent.com/73419211/126860304-799c9d71-5940-41de-986d-1a08d8b5188c.png)


## Documentation
[Node.js Guide](https://nodejs.org/en/docs/)<br>
[Express.js Guide](https://expressjs.com/en/starter/installing.html)<br>
[Mongoose Guide](https://mongoosejs.com/docs/guide.html)<br>
[MongoDb Guide](https://docs.mongodb.com/)
[Redis Guide](https://redis.io/documentation)
