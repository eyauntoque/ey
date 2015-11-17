//var Publicacion = require('./model/bo/publicacion');
var Controller = require('./controller/controller');

module.exports = function(app) {

	app.post('/publicacion', Controller.insertUsuario);
	
	// application 
	app.get('*', function(req, res) {
		res.sendfile('./eyapp/view/index.html'); // Carga única de la vista
	});
};