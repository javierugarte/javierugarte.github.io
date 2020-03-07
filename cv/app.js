var app = angular.module("app", []);

var $URL = "apps.json";


app.controller("appCtrl", function($scope, $http) {
    $http.get($URL)
    .success(function(data) {
      
		json = angular.fromJson(data);

		var bitbanApps = json["business"][0]["apps"];
		var personalApps = json["business"][1]["apps"];
		
      	var defApps = getApplicationWithoutHidden(bitbanApps);
      	var defPersonalApps = getApplicationWithoutHidden(personalApps);

		$scope.bitban = defApps;
		$scope.personal = defPersonalApps;
	});

});

function getApplicationWithoutHidden(apps) {
	var defApps = []; 
		
		for (var i in apps) {
			
			var app = apps[i];
			
			if (app["hidden"] == true) {
				continue;
			}
			
			defApps.push(app);	
		}

		return defApps;
}

function isPublishApp(publishDate) {
	
}
