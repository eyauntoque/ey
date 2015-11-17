angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newUsuario = {};
	$scope.selected = false;

	// Función para registrar a una persona
	$scope.registrarUsuario = function() {
		$http.post('/publicacion', $scope.newUsuario)
		.success(function(data) {
				$scope.newUsuario = {}; // Borramos los datos del formulario
				console.log('Ok: ' + data);
				alert("Ey !! Acabas de inscribirte exitosamente");
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

}