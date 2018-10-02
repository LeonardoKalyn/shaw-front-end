# shaw-front-end

To run this project clone the repo, then run npm install and npm start.
The project follows a simple container/presentational components architecture, using react router for navigation.

Since this project requests data from live server, you should set Access Contro Allow Origin to true, otherwise Chrome
and other browsers may interromp external requests.
An easy way to do this on Chrome is to use the following extension [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)

If you wish to run the [back-end server](https://github.com/LeonardoKalyn/shaw-back-end) locally, 
make sure to add a .env file with an API enviroment variable pointing to localhost:3000, or whatever port you may chose.
