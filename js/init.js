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



$(document).ready(function(){
  console.log('were ready');



  var articleActive, revealContainer = document.getElementsByClassName('article-reveal-container'), btn = document.getElementsByClassName('close-btn'), tile = document.getElementsByClassName('artical-reveal-tile');


  tileTarget =  $( ".article-reveal-container ul li:last-child" );
  console.log(tileTarget);


  tileTarget[0].addEventListener("transitionend", detectTheEnd, false);
  tileTarget[0].addEventListener("webkitTransitionEnd", detectTheEnd, false);
  tileTarget[0].addEventListener("mozTransitionEnd", detectTheEnd, false);
  tileTarget[0].addEventListener("msTransitionEnd", detectTheEnd, false);
  tileTarget[0].addEventListener("oTransitionEnd", detectTheEnd, false);


  function detectTheEnd(e) {
    if (e.propertyName == "opacity") {
      console.log("Finished transition!" );
      if(articleActive === true){
        console.log(e);
        // revealContainer[0].style.visibility = 'hidden';
        // revealContainer[0].addClass('inactive');
        revealContainer[0].classList.add('inactive');
        btn[0].style.visibility = 'visible';
        btn[0].classList.remove('inactive');
      }
    }
  }

  function triggerReverse(){
   for (var i = 0; i <= revNumber.length; i++) {
    $( ".artical-reveal-tile:eq(" + revNumber[i] + ")" ).toggleClass( "animate" ).css( "transition-delay", (0.05 *i) + "s" );
  }
}

  function triggerForwards(){
     for (var i = 0; i <= forNumber.length; i++) {
    $( ".artical-reveal-tile:eq(" + forNumber[i] + ")" ).toggleClass( "animate" ).css( "transition-delay", (0.05 *i) + "s" );
  }
}




    totalOfVals = $('.artical-reveal-tile').length;


    $('.artical-reveal-tile').bind('click', function() {

      $(this).toggleClass("animate");

      articleActive = !articleActive;

       if (articleActive === false){
      //revealContainer[0].style.visibility = 'visible';
      revealContainer[0].classList.add('active');
    }


      indexVal = $( ".artical-reveal-tile" ).index( $(this) );

      revNumber = [];
      forNumber = [];

      indexValBelow = indexVal - 1;

      for (var i = indexValBelow; i >= 0 ; i--) {
        console.log("i from below: " +  i);
        revNumber.push(i);
      };

      //loop through above and add animating class;
      for (var i = (indexVal+1); i < totalOfVals; i++) {
        forNumber.push(i);
        console.log(forNumber);
      };


      triggerReverse();
      triggerForwards();
    });



 // runAnim = function(){
 //    articleActive = !articleActive;
 //    if (articleActive === false){
 //      revealContainer[0].style.visibility = 'visible';
 //    }
 //    // for (var i = 0; i <= (tile.length-1); i++) {
 //    //   tile[i].classList.toggle('animate');
 //    // };
 // }





  btn[0].addEventListener("click", function () {

    this.classList.toggle('inactive');

    // articleActive = !articleActive;


    if (articleActive === true){
      //revealContainer[0].style.visibility = 'visible';
      revealContainer[0].classList.remove('inactive');
      revealContainer[0].classList.add('active');
      for (var i = 0; i <= (tile.length-1); i++) {
      tile[i].classList.toggle('animate');
    };

    } else if(articleActive === false){
      revealContainer[0].classList.remove('active');
    }
    console.log('articleActive: ' + articleActive)

    articleActive = !articleActive;



  });
});




    

  WLCMI.start();
});

