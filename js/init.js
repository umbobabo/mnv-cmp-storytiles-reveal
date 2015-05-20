function ecStoryTilesReveal(){
  $.extend(this , ecStoryTilesRevealConfig);
}

ecStoryTilesReveal.prototype = new Widget();

/* Script below just for handlebars example */
$(document).ready(function(){
  $("[data-mnv='ecStoryTilesReveal']")
    .on('dataProviding', function(){
      //Retrive data from the data attribute
      var widget = $.data(this, 'widget');
      widget.log('Received data');
      var tmp = Handlebars.templates['ec-storytilesreveal'];
      $(this).html(tmp(widget.data));
    });

  WLCMI.start();
});

