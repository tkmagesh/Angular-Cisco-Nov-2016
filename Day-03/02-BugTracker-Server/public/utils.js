var utils = angular.module("utils", []);
utils.filter('trimText', function(appDefaults){
	var defaultTrimLength = appDefaults.trimLength;
	return function(data, trimLength){
		var trimLength = trimLength || defaultTrimLength;
		return data.length < trimLength ? data : data.substr(0,trimLength) + '...';
	};
});

utils.filter('elapsed', function(){
	return function(data){
		return moment(data).fromNow();
	};
});