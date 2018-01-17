require("dotenv").config();
//Load Node Modules
var keys = require('./keys.js');
var twitter = require('twitter');
var request = require('request');
var spotify = require('node-spotify-api');

//takes in node command
var input = process.argv;
var command = input[2];
var selection = input[3];

//loads Twitter and Spotify Keys
var client = new twitter(keys.twitter);
var spotifyAPI = new spotify(keys.spotify);

//twitter node
var client = new twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
//Send request to Twitter API
var getTweets = function() {
	var client = new twitter(keys.twitter);
	var params = {screen_name: selection, count: 20 };
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
		var data = []; //empty array to hold data
		for (var i = 0; i < tweets.length; i++) {
		data.push({
			"Tweet: " : tweets[i].text,
			"Timestamp: " : tweets[i].created_at,
		});
		}
		console.log(data);
    }
  });
};
//Send request to Spotify API
function spotifyThis() {
	spotifyAPI.search({ type: 'track', query: selection}, function(err, data) {
		if ( err ) {
		console.log('Error occurred: ' + err);
		return;  //from spotify npm docs
	} else{
		var songInfo = data.tracks.items[0];
		var songResult = console.log(songInfo.artists[0].name)
			console.log("--------------------------------")
			console.log(songInfo.name)
			console.log(songInfo.preview_url)
			console.log(songInfo.album.name)
			console.log(songResult);
			console.log("--------------------------------")
    };
  });
}  
//using request to grab JSON object of OMDB API
function omdbAPI() {
	request("http://www.omdbapi.com/?t=" + selection +"=&plot=&tomatoes=true=short&apikey=trilogy",
		function(error, response, body) {
	  if (!error && response.statusCode === 200) {
	  	console.log("--------------------------------");
		console.log("TITLE: " + JSON.parse(body).Title);
		console.log("RELEASED: " + JSON.parse(body).Released);
		console.log("IMDB RATING: " + JSON.parse(body).imdbRating);
		console.log("ROTTEN TOMATOES RATING: " + JSON.parse(body).Ratings[1].Value);
		console.log("LANGUAGE: " + JSON.parse(body).Language);
		console.log("PLOT: " + JSON.parse(body).Plot);
		console.log("CAST: " + JSON.parse(body).Actors);
		console.log("--------------------------------")
		}
	})
};

getTweets();
spotifyThis();
omdbAPI();
