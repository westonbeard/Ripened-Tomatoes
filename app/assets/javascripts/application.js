var apikey = "pq2ed2adddmx9crsnfwvhg36";

var baseUrl = "http://api.rottentomatoes.com";

// construct the uri with our apikey
//http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=[your_api_key]&page_limit=1

var moviesSearchUrl = baseUrl + '/api/public/v1.0/lists/movies/in_theaters.json?apikey=' + apikey + '&page_limit=20';

//var query = "Hook";

$(document).ready(function() {
 
  // send off the query
  $.ajax({
    url: moviesSearchUrl, //+ '&q=' + encodeURI(query),
    dataType: "jsonp",
    type: "GET",
    success: searchCallback
  });
});
 
// callback for when we get back the results
function searchCallback(data) {
 //$(document.body).append('Found ' + data.total); //+ ' results for ' + query);
  var movies = data.movies;

 $.each(movies, function(index, movie) {
    if ( parseInt(movie.ratings.critics_score) >= 75 ){
   $(document.body).append('<h1 class="movies">' + movie.title + '</h1>');
   $(document.body).append('<img src="' + movie.posters.original + '" class="poster" />');
  $(document.body).append('<div class="score"><h3>' + movie.ratings.critics_score + '%</h3></div>');

    } else {
      
    }
 });
}


// //var query = "Hook";

// $(document).ready(function() {
 
//   // send off the query
//   $.ajax({
//     url: moviesSearchUrl, //+ '&q=' + encodeURI(query),
//     dataType: "jsonp",
//     type: "GET",
//     success: searchCallback
//   });
// });
 
// // callback for when we get back the results
// function searchCallback(data) {
//  $(document.body).append('Found ' + data.total); //+ ' results for ' + query);
//  var movies = data.movies;
//  $.each(movies, function(index, movie) {
//    $(document.body).append('<h1>' + movie.title + '</h1>');
//    $(document.body).append('<img src="' + movie.posters.thumbnail + '" />');
//  });
// }