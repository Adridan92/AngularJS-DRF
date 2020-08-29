angular.module('user').component('userProfile',{

	templateUrl:'assets/app/user/user-info.template.html',
	controller:[
		'userService',
		function(userService){
			var ctrl=this;
			ctrl.user={};

			
			ctrl.getProfileUser=function(id){
					userService.getProfileUser(id).then(function(data){
							ctrl.user=data;
					});

			};

			//ctrl.getProfileUser(idParam);
			ctrl.getProfileUser(1);



		},
	],
				



});