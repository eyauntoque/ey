var mongoose 	= require("mongoose");
var schema		= mongoose.Schema;

var publicacionSchema = new schema({
	cliente		: {type: String},
	tipo		: {type: String, enum: ['Social','Educación','Laboral']},
	fechaDeAlta	: {type: String},
	fechaDeBaja	: {type: String},
	puntos		: {type: Number},
	descripcion	: {type: String}
});

module.exports = mongoose.model('Publicacion',publicacionSchema);