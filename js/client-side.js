docReady(function(){

  Handlebars.registerHelper("ifvalue", function(conditional, options) {
    if (conditional == options.hash.equals) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
  });

  var tmp = Handlebars.templates['ec-storytilesreveal'];
  Handlebars.registerPartial("partials/theWorldIf/article", Handlebars.templates['article']);
  document.querySelector('.mnv-ec-storytilesreveal').innerHTML = tmp(ecStoryTilesRevealData['ec-storytilesreveal-0']);
});