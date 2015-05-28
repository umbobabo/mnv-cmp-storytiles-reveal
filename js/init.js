function initReveal(){
  var articleActive,
  me = this,
  revealContainer = document.getElementsByClassName('article-reveal-container'),
  close = document.querySelector('.close-btn'),
  tile = document.getElementsByClassName('artical-reveal-tile'),
  articleContainer = document.querySelector('.article-container'),

  tileTarget =  document.querySelector( ".article-reveal-container ul li:last-child" );
  me.el = document.querySelector('.mnv-ec-storytilesreveal');

  tileTarget.addEventListener("transitionend", detectTheEnd, false);
  tileTarget.addEventListener("webkitTransitionEnd", detectTheEnd, false);
  tileTarget.addEventListener("mozTransitionEnd", detectTheEnd, false);
  tileTarget.addEventListener("msTransitionEnd", detectTheEnd, false);
  tileTarget.addEventListener("oTransitionEnd", detectTheEnd, false);

  preventDefaultClicks();

  function preventDefaultClicks(){
    $('.artical-reveal-tile a').on('click', function(e){
      e.preventDefault();
      //e.stopPropagation();
    });
  }


  function resetTransitionDelay() {
    for (var i = 0; i <= totalOfVals; i++) {
      $( ".artical-reveal-tile:eq(" + [i] + ")" ).css( "transition-delay", (0.0) + "s" );
    }
  }


  function detectTheEnd(e) {
    if (e.propertyName == "opacity") {
      if(articleActive === true){
        revealContainer[0].classList.add('inactive');
        close.style.visibility = 'visible';
        close.classList.remove('inactive');
        resetTransitionDelay();
      } else {
        emptyArticle();
      }
    }
  }

  function loadArticle(data) {
    var tmp = Handlebars.templates['article'];
    var html = tmp(data);
    $(articleContainer).html(html);
    me.removePreloader();
    goRevealAnimation();
  }

  function triggerReverse(){
    for (var i = 0; i <= revNumber.length; i++) {
      $( ".artical-reveal-tile:eq(" + revNumber[i] + ")" ).toggleClass( "animate" ).css( "transition-delay", (0.1 *i) + "s" );
    }
  }

  function triggerForwards(){
    for (var i = 0; i <= forNumber.length; i++) {
      $( ".artical-reveal-tile:eq(" + forNumber[i] + ")" ).toggleClass( "animate" ).css( "transition-delay", (0.1 *i) + "s" );
    }
  }

  totalOfVals = $('.artical-reveal-tile').length;


  $('.artical-reveal-tile').bind('click', function() {
    var nid = $(this).attr('data-nid');
    if(nid){
      me.addPreloader();
      $.get("http://localhost:3100/article/" + nid, function( data ) {
        // TODO Add data check to prevent errors on empty values or missing properties
        var img = (data.hasOwnProperty('field_images') && data.field_images[0] !== null && data.field_images[0].filepath) ? 'http://www.economist.com/' + data.field_images[0].filepath : '';
        //console.log(data.body);
        loadArticle({
          article: {
            image: img,
            flyTitle: data.field_fly_title[0].value,
            rubric: data.field_rubric[0].value,
            body: data.body
          }
        });
      });
    }
  });



  function goRevealAnimation(){
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
  }

  function emptyArticle(){
    articleContainer.innerHTML = '';
  }

  close.addEventListener("click", function () {
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

initReveal.prototype = new Widget();

docReady(function(){
  var reveal = new initReveal();
});