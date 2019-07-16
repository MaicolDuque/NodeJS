//Requires
const mongoose = require('mongoose');
const express = require('express')
const http = require('http');
const config = require('./config');
const configExpress = require('./config/express');
const configViewsPartials = require('./config/viewsPartials');
const routes = require("./routes/");

// Connect to MongoDB
mongoose.connect(config.mongo.uri, { useNewUrlParser: true }, (error, result) => {
	if(error){
		return console.log(error);
	}

	console.log("conectado!")
});
// mongoose.connection.on('error', (err) => {
//   console.error('Error', 'MongoDB connection error', {
//     data: err,
//     time: new Date().toISOString(),
//   });
//   process.exit(-1);
// });


const app = express();
const server = http.createServer(app);

configExpress(app);
configViewsPartials(app, express);
routes(app);

app.post('/', (req, res ) => {

server.listen(config.port, () => {
	console.log (`servidor en el puerto ${config.port}`);
});
