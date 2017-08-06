			//$('#user-email').on('input',function() {
       // var email = $('#user-email').val()
       // var message = 'Welcome Back, ' + email;
       // $('.welcome-message').text(message);
   // });
// giving route to our app
   var foodieApp = angular.module('foodieApp',['ngRoute']);
   foodieApp.config(function ($routeProvider) {
 	$routeProvider
 	.when('/',{
 		templateUrl: 'pages/login.html',
 		controller: 'loginController'
 	})
 	.when('/home',{
 		templateUrl: 'pages/main.html',
 		controller: 'mainController'
 	})
  .when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
 })
// making controller for our aap
//main page controller
   foodieApp.controller('mainController',function($scope) {
     $scope.restaurants = [{
 	name: 'Farzi Cafe',
 	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
 	  location: 'Connaught Place',
     	category: 'Casual Dining, Bar',
 	vote: '4.2',
 	cuisines: 'Modern Indian',
 	cost: '2200',
 	hours: '12 Noon to 1 AM (Mon-Sun)',
   id: 1,
 	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
 },
 {
 name: 'Barbeque Nation',
 address: 'SCO 39,Madhya Marg, sector 26, Chandigarh',
   location: 'sector 26 chandigarh',
     category: 'Casual Dining',
 vote: '4.2',
 cuisines: 'North Indian and Chinese',
 cost: '1300',
 id: 2,
 hours: '12 Noon to 1 AM (Mon-Sun)',
 image: 'http://i0.wallpaperscraft.com/image/cheese_meat_vegetables_dinner_107933_300x188.jpg'
 },
 {
 name: 'Pirates OF Grill',
 address: '313, 3rd floor, Elante mall chandigarh',
   location: 'Elante Mall Chandigarh',
     category: 'Casual Dining, Bar',
 vote: '4.2',
 cuisines: 'north indian ,Continental , Asian ',
 cost: '1200',
 id: 3,
 hours: '12 Noon to 1 AM (Mon-Sun)',
 image: 'http://i1.wallpaperscraft.com/image/soup_dinner_vegetables_sauce_110206_300x188.jpg'
 },{
 name: 'Dastaan',
 address: 'SCO 43, Backside, Madhya marg,sector 7,Chandigarh',
   location: 'Sector 7,Chandigarh',
     category: 'Casual Dining, ',
 vote: '4.6',
 cuisines: 'Modern Indian',
 cost: '1000',
 id: 4,


 hours: '11 Noon to 11 AM (Mon-Sun)',

 image: 'http://i0.wallpaperscraft.com/image/pasta_seafood_wine_shrimp_serving_dinner_87773_300x188.jpg'
 },
 {
 name: 'Burgill',
 address: 'Booth 70 ,Sector 8,Chandigarh',
   location: 'Sector 8 ,Chandigarh',
     category: 'Casual Dining, Bar',
 vote: '4.2',
 cuisines: 'Burgers,Fast food, Beverages',
 cost: '500',
 id: 5,
 hours: '12 Noon to 1 AM (Mon-Sun)',
 image: 'http://i2.wallpaperscraft.com/image/sandwich_meat_bread_dinner_106191_300x188.jpg'
 }]

 })

//login page controller
  foodieApp.controller('loginController',function($scope,$location) {
  	$scope.goToHome = function() {
  		// console.log('Do Something')
  		$location.url('home')
  	}
  })
//restaurant page controller
  foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
    $scope.ingredients = [];
  	$scope.restaurantId = $routeParams.id;
  	var restaurants = [
  	{
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
    bestDish: {
            name: 'Diwan-mixed-grill',
            image: 'http://blog.bebuzzd.com/wp-content/uploads/2017/03/Diwan-mixed-grill.jpg'
          },
    id: 1,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
  	name: 'Barbeque Nation',
  	address: 'SCO 39,Madhya Marg, sector 26, Chandigarh',
  	location: 'chandigarh',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'North indian and chinese',
  	cost: '1200',
    bestDish: {
            name: 'Noodles',
            image: 'http://i0.wallpaperscraft.com/image/pasta_yajtso_lapsha_kunzhut_103644_300x188.jpg'
          },
    id: 2,
  	hours: ' 12:30 PM to 1:30 AM',
  	image: 'https://images.pexels.com/photos/280018/pexels-photo-280018.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
  },
  {
    name: 'Pirates OF Grill',
    address: '313, 3rd floor, Elante mall chandigarh',
      location: 'Elante Mall Chandigarh',
        category: 'Casual Dining, Bar',
    vote: '4.2',
    cuisines: 'north indian ,Continental , Asian ',
  	cost: '1800',
     bestDish: {
              name: 'Speciality',
              image: 'http://i1.wallpaperscraft.com/image/food_pastries_cheese_round_88391_300x188.jpg'
            },
    id: 3,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'http://i.ndtvimg.com/i/2016-04/pasta-625_625x350_81461826302.jpg'
  },
  {
    name: 'Dastaan',
    address: 'SCO 43, Backside, Madhya marg,sector 7,Chandigarh',
      location: 'Sector 7,Chandigarh',
        category: 'Casual Dining, ',
    vote: '4.6',
    cuisines: 'Modern Indian',
    cost: '1000',

     id: 4,
  	hours: '12 Noon to 4 PM (Mon-Sun)',
  	image: 'https://media-cdn.tripadvisor.com/media/photo-s/04/1e/c5/46/gazebo-spice-twist-restaurant.jpg'
  },
  {
    name: 'Burgill',
    address: 'Booth 70 ,Sector 8,Chandigarh',
      location: 'Sector 8 ,Chandigarh',
        category: 'Casual Dining, Bar',
    vote: '4.2',
    cuisines: 'Burgers,Fast food, Beverages',
    cost: '500',


    id: 5,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?w=940&h=650&auto=compress&cs=tinysrgb'
  },

  ]
  //method for identification of food (veg or nonveg)
  	$scope.restaurant = restaurants[$routeParams.id - 1];
    console.log($scope.restaurant);
    $scope.getIngredients = function(url)  {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key e3894b0b02784675bd3f9c68ff5cb799',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {
    var ingredients = response.data.outputs[0].data.concepts;
    	for (var i =0;i < ingredients.length;i++) {
    	$scope.ingredients.push(ingredients[i].name);
    $scope.probabilityvalue.push(ingredients[i].value);
    	}
        }, function (xhr) {
        	console.log(xhr);
        })
	}
  $scope.ingredients = [];
  		$scope.probabilityvalue=[];

  		$scope.checkVegorNonVeg = function() {
  			var flag_quit =0;
  			ing_list = $scope.ingredients; //hard copy
  			prob_value= $scope.probabilityvalue;
  			var elements = prob_value.filter(function(a){return a > 0.75;});
  			ing_list.splice(elements.length,20)
  			var nonveg = ["egg","meat","bacon","chicken","sushi","pork","steak"];

  			for(j=0;j<ing_list.length;j++){
  				for(i=0;i<nonveg.length;i++){
  					if(ing_list[j] == nonveg[i]){
  						flag_quit=1;
  						break;
  					}
  				}
  			if(flag_quit==1){
  				$(".rest-extra").css("background-color", "red");
  				break;
  			}

  		}
  		if(flag_quit==0){$(".rest-extra").css("background-color", "green");}
  	}
});
