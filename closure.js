angular.module('app', [])
  .controller('cityController', function($scope) {

    $scope.cities = [
    {
    	name: "Kingston",
    	country:"Jamaica",
    	sites: "Bob Marley Museum"
    },
    {
    	name: "Paris",
    	country:"France",
    	sites: "Eiffel Tower"
    },
    {
    	name: "London",
    	country:"England",
    	sites: "The Thames"
    },
    {
    	name: "Jerusalem",
    	country:"Israel",
    	sites: "Temple Mount"
    },
    {
    	name: "Cardiff",
    	country:"Wales",
    	sites: "Knowklu"
    },
    {
    	name: "Edinburgh",
    	country:"Scotland",
    	sites: "Edinburgh Castle"
    }
    ]
});