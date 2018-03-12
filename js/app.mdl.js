var app = angular.module("demoApp", []);
app.controller('whoWeAreCtrl', ['$scope',"$rootScope","$location",  function($scope, $rootScope, $location){
		
	

	$scope.getParameterByName = function(name){
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec( window.location.href );
		if( results == null )
		return "";
		else
		return decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	/*function checkQString(){
		var field = 'page';
		var url = window.location.href;
		if(url.indexOf('?' + field + '=') != -1)
		    return true;
		else if(url.indexOf('&' + field + '=') != -1)
		    return true;
		return false
	}*/


	$scope.getTemplateUrl = function(page){
		$scope.pageUrl = page;
		$rootScope.$on('$includeContentLoaded', function() {
		    $(".popcontent").mCustomScrollbar({
                scrollButtons:{
                    enable:false
                },
                advanced:{
                    updateOnContentResize: true
                }
            });
		});
	}

	$scope.queryString = /[?&]page=/.test(location.search);
	if($scope.queryString){
		$scope.pageUrl = $scope.getParameterByName("page");	
	}
	else{
		$scope.pageUrl = "CaseStudies/Hyatt-Atlanta-Midtown.html";		
	}
	
	$scope.getCaseStudies = function(page){
		$scope.pageUrl = page;
	}



}]);


angular.bootstrap(document, ['demoApp']);