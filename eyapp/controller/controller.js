// controller.js
/*var mongoose 	= require('mongoose');
var Publicacion	= mongoose.model('publicacion');*/


exports.insertUsuario = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var usuario = new Usuario({
		nombre:    req.body.nombre,
		edad: 	  req.body.edad,
		email:  req.body.email,
		celular:   req.body.celular,
		politicas:  req.body.politicas
	});

	usuario.save(function(err, usuario) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(usuario);
	});
};