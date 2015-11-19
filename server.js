//Server.js
var express 	= require("express");
var app 		= express();
var bodyParser 	= require("body-parser");
var methodOverride = require("method-override");
var mongoose	= require("mongoose");

app.use(express.static(__dirname + '/eyapp/view'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var port = process.env.PORT || 8080;
var uribd = process.env.MONGOLAB_URI || 'mongodb://localhost/eyDataBase';

mongoose.connect(uribd, function(err,res){
	if(err) throw err;
	console.log('Conectado a la base de datos');
});

require('./eyapp/routes')(app);
/*
var models 		= require('./eyapp/model/bo/publicacion')(app, mongoose);
var controller	= require('./eyapp/controller/controller');

var router = express.Router();
	router.get('/', function(req, res){
		res.send("hola mundo nuevo !!");
	});
app.use(router);

var publicacion = express.Router();
publicacion.route('/publicacion')
	.get(controller.getPublicaciones);

app.use('/api',publicacion);*/

app.listen(port, function(){
	console.log("Servidor corriendo en http://localhost:8080");
});