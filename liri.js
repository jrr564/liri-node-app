require("dotenv").config();

var keys = require('./keys.js');
var twitter = require('twitter');
var request = require('request');
var spotify = require('spotify');

var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);
//twitter node
var client = new twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

//takes in node command
var input = process.argv;
var request = input[2];
var selection = input[3];

var getTweets = function() {
  var client = new twitter(keys.twitter);

  var params = {screen_name: 'RealUSADude', count: 20 };

  client.get('statuses/user_timeline', params, function(error, tweets, response) {

    if (!error) {
      var data = []; //empty array to hold data
      for (var i = 0; i < tweets.length; i++) {
        data.push({
	       'Tweets: ' : tweets[i].text,
	       'created at: ' : tweets[i].created_at,
        });
      }
      console.log(data);
    }
  });
};

getTweets();
		

// T.get('search/tweets', params, function(err, data, response) {
//   if(!err){
//     // This is where the magic will happen
//   } else {
//     console.log(T);
//     console.log(params);
//     console.log(Twitter)
//   }
// });

// for (let i = 0 <data.statuses.length, i++) {
// 	let id = {id = data.statuses[i].id-str}
// }


// var T = new Twitter(config);
// var params = {
// 	q: '#nodejs',
// 	count: 10,
// 	result_type: 'recent',
// 	lang: 'en'
// }

// T.get('search/tweets', params, function(err, data, response) {
//   if(!err){
//   } else {
//     console.log(err);
//   }
// })
// //function 

// // } else if (request === "spotify-this-song") {



// // } else if (request === "movie-this") {



// // } else if (request === "do-what-it-says") {


// // } else {
// // 	console.log("Please make another request, dog")
// // }


