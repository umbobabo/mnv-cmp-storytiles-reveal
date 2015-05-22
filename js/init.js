docReady(function(){
  initReveal();
});

function initReveal(){

  var articleActive,
  revealContainer = document.getElementsByClassName('article-reveal-container'),
  btn = document.getElementsByClassName('close-btn'),
  tile = document.getElementsByClassName('artical-reveal-tile'),
  articleContainer = document.getElementsByClassName('article-container'),
  launch = true;

  tileTarget =  $( ".article-reveal-container ul li:last-child" );

  tileTarget[0].addEventListener("transitionend", detectTheEnd, false);
  tileTarget[0].addEventListener("webkitTransitionEnd", detectTheEnd, false);
  tileTarget[0].addEventListener("mozTransitionEnd", detectTheEnd, false);
  tileTarget[0].addEventListener("msTransitionEnd", detectTheEnd, false);
  tileTarget[0].addEventListener("oTransitionEnd", detectTheEnd, false);



  function resetTransitionDelay() {
    for (var i = 0; i <= totalOfVals; i++) {
      $( ".artical-reveal-tile:eq(" + [i] + ")" ).css( "transition-delay", (0.0) + "s" );
    }
  }


  function detectTheEnd(e) {
    if (e.propertyName == "opacity") {
      if(articleActive === true){
        revealContainer[0].classList.add('inactive');
        btn[0].style.visibility = 'visible';
        btn[0].classList.remove('inactive');
        resetTransitionDelay();
        launchiFrame();
      }
    }
  }

  function launchiFrame() {
    if(launch === true){
       $( ".article-container" ).append('<div id="iframe" class="iframe"><iframe src="http://www.economist.com/democracy" width="100%" height="5000px" scrolling="no" frameborder="0"></iframe></div>');
     }
     launch = false;
  }

  function triggerReverse(){
    for (var i = 0; i <= revNumber.length; i++) {
      $( ".artical-reveal-tile:eq(" + revNumber[i] + ")" ).toggleClass( "animate" ).css( "transition-delay", (0.2 *i) + "s" );
    }
  }

  function triggerForwards(){
    for (var i = 0; i <= forNumber.length; i++) {
      $( ".artical-reveal-tile:eq(" + forNumber[i] + ")" ).toggleClass( "animate" ).css( "transition-delay", (0.2 *i) + "s" );
    }
  }

  totalOfVals = $('.artical-reveal-tile').length;


  $('.artical-reveal-tile').bind('click', function() {

    $(this).toggleClass("animate");

    articleActive = !articleActive;

    if (articleActive === false){
      revealContainer[0].classList.add('active');
    }

    indexVal = $( ".artical-reveal-tile" ).index( $(this) );

    revNumber = [];
    forNumber = [];

    indexValBelow = indexVal - 1;

    for (var i = indexValBelow; i >= 0 ; i--) {
      // console.log("i from below: " +  i);
      revNumber.push(i);
    };

    //loop through above and add animating class;
    for (var i = (indexVal+1); i < totalOfVals; i++) {
      forNumber.push(i);
      // console.log(forNumber);
    };


    triggerReverse();
    triggerForwards();
  });


  btn[0].addEventListener("click", function () {
    this.classList.toggle('inactive');
    if (articleActive === true){
      revealContainer[0].classList.remove('inactive');
      revealContainer[0].classList.add('active');
      for (var i = 0; i <= (tile.length-1); i++) {
        tile[i].classList.toggle('animate');
      }
    } else if(articleActive === false){
      revealContainer[0].classList.remove('active');
    }
    articleActive = !articleActive;
  });

}