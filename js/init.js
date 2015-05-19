$(document).ready(function(){
  var tmp = Handlebars.templates['ec-storytilesreveal'];
  $('.mnv-ec-storytilesreveal').html(tmp({
    "title": "Instance 0 of your widget",
    "list": [
      { "label": "First li element" },
      { "label": "Second li element" }
    ]
  }));
});