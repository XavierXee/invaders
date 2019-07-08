# Invaders
~~~~
node v10.15.3
npm v6.4.1
~~~~

### Notes:
The solution is made of an Express app where relies the invaders detection logic (concerned classes are in 'app/core' folder) and a React client to see it in action.

### Install, Build and Start:
After dependencies are installed, 'buid' command will build both client and server side of the application and subsequently start server.
~~~~
npm install
npm run build 
~~~~
Connect to :
~~~~
http://localhost:8080 
~~~~

### Tests:
Run unit tests for server app :
~~~~
npm run app:test
~~~~
Run React client tests :
~~~~
npm run client:test
~~~~
