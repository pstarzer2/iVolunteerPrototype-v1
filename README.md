# iVolunteerPrototype

# Starting and initializing and deploying the blockchain-network
1. cd ~/iVolunteerPrototype-v1/blockchain-network
2. ./init

# Due to a bug change connection profile of admin business network card
1. cd ~/.composer/cards/admin@blockchain-network
2. in connection.json change localhost to 172.17.0.1 (docker ip address)

# Adding demo participants
1. cd ~/iVolunteerPrototype-v1/blockchain-network
2. ./addParticipants

# Starting the REST server
1. cd ~/iVolunteerPrototype-v1/rest-server
2. docker-compose up -d
3. in a browser go to localhost:3000

# Starting client application
1. open project "blockchain-application" in webstorm
2. right click "package.json -> "npm install"
3. right click "package.json -> "show npm scripts"
4. in the new window "start"
5. in a browser go to localhost:4200
