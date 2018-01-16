require("dotenv").config();

var Twitter = require('twitter');
var spotify = new Spotify(keys.spotify);
//twitter node
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

//takes in node command
var request = process.argv[2];
var request = process.argv[3];




if (request === "my-tweets") {



} else if (request === "spotify-this-song") {



} else if (request === "movie-this") {



} else if (request === "do-what-it-says") {


} else {
	console.log("Please make another request.")
}


