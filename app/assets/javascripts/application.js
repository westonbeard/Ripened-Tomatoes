var apikey = "pq2ed2adddmx9crsnfwvhg36";
var baseUrl = "http://api.rottentomatoes.com";
var form = $('#search');
var query = $('#search-name');
var result = $("#results");

form.on("submit", search);

function search(e){
  e.preventDefault();

  var moviesSearchUrl = baseUrl + '/api/public/v1.0/lists/movies/in_theaters.json?apikey=' + apikey + '&page_limit=8';

  console.log(moviesSearchUrl);

  $.ajax({
    url: moviesSearchUrl,
    dataType: "jsonp",
    success: searchCallback
  });
}

function searchCallback(data) {

  console.log(data);
 result.append('Found ' + data.total + ' results for ' + query);
 var movies = data.movies;
 $.each(movies, function(index, movie) {

    //need to add movies to DB as they populate page
   result.append('<h1>' + movie.title + '</h1>');
   result.append('<img src="' + movie.posters.thumbnail + '" />');
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