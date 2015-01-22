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


var form = $('#search');
var query = $('#search-name');
var result = $("#results");

form.on("submit", search);

function search(e){
  e.preventDefault();
  var url = 'http://www.strudel.org.uk/lookUP/json/?name=' +  query.val();

  console.log()
}

//   $.ajax({
//     url: url,
//     dataType: "jsonp",
//     type: "GET",
//     success: function(response, status, jqXHR){
//       showResults(response);
//     },
//     error: function(response, status, jqXHR){
//       failure(response);
//     }
//   });
// }

// function showResults(response, status, jqXHR){
//   var output;
//   if (response.image === undefined){
//     output = "no image for this query";
//   }
//   else{
//     output = "<img src='http://" + response.image.src.replace("http://","") + "'>"; 
//   } 
//   result.empty();
//   result.append(output);
// }

// function failure(response, status, jqXHR){
//   var output = "API does not have data for your query!";
//   result.empty();
//   result.append(output);
// }
