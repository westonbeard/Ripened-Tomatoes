// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var apikey = "pq2ed2adddmx9crsnfwvhg36";
var baseUrl = "http://api.rottentomatoes.com";
var form = $('#search');
var query = $('#search-name');
var result = $("#results");

form.on("submit", search);


function search(e){
  e.preventDefault();

  var moviesSearchUrl = baseUrl + '/api/public/v1.0/lists/movies/in_theaters.json?apikey=' + apikey + '&page_limit=50';

  $.ajax({
    url: moviesSearchUrl,
    dataType: "jsonp",
    success: searchCallback
  });
}

function searchCallback(data) {

 // result.append('Found ' + data.total + ' results for ' + query);
 var movies = data.movies;

 $.each(movies, function(index, movie) {

   if ( parseInt(movie.ratings.critics_score) >= 75 ){
   result.append('<h1 class="movies">' + movie.title + ' (' + movie.year + ')</h1>');
   result.append('<img src="' + movie.posters.original + '" class="poster" />');
   result.append('<h3 class="movies">Rated ' + movie.mpaa_rating + '</h3>');
  result.append('<div class="score"><h2>' + movie.ratings.critics_score + '%</h2></div>');

  // result.append('<a href="' + "/movies/added" + '">' + 'Add to Movies' + '<a/>');

  result.append("<form class=submit_buttons><input type=submit id=" + movie.id   + " value=Add_to_list ></form>");
 }

 });

 $(".submit_buttons").on("submit",function(event){
  event.preventDefault();
  movie_id = this.firstChild.getAttribute("id");
  console.log(movie_id);
  // console.log($(this).find(id));

  $.ajax({
    type: "POST",
    url: "/movies/",
    data: {movie_id: movie_id}
    
  });

});
}