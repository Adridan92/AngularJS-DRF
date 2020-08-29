var app = angular.module('App');

app.factory('userService',['$http','$q', function($http,$q){
	
    

	function getProfileUser(id){
		let deferred=$q.defer();
		$http
		.get('/assets/data/users.json')
		.then(function(data){
			let result =data['data'].filter(users => users['id']==id)
		
			if(result.length > 0 ){
				deferred.resolve(result[0]);
			}else{
				deferred.resolve({});
			}

		});

		return deferred.promise




	}

	return {

		getProfileUser:getProfileUser
	}

}]);