var mongoose 	= require('mongoose');
var schema		= mongoose.Schema;

var usuarioSchema = new schema({
	nombre		: {type: String},
	edad		: {type: String},
	email		: {type: String},
	celular		: {type: String},
	politicas	: {type: String}
});

module.exports = mongoose.model('Usuario',usuarioSchema);