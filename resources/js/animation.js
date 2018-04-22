// Paralax roller

if($(window).innerWidth() < 770) {
 $('#topper, #anfahrt-img').css('background-attachment', 'initial');
} else {
  $('#topper, #anfahrt-img').paroller({ factor: '-0.5', type: 'background', direction: 'vertical'});
};


// Submit Button animation

$('#submit').click(function(){
  $('#form').hide('slow', function(){
    $('#form').animate({"opacity": "0"}, "slow")
  })
  $('#buchung-heading').text('Vielen Dank für Deine Anfrage')
});

// Scroll animaiton

var houseTween = new TweenMax.to('#house', 1, {opacity: 1});
var apt1Tween = new TweenMax.to('#apt1', 1, {opacity: 1});
var apt2Tween = new TweenMax.to('#apt2', 1, {opacity: 1});
var apt3Tween = new TweenMax.to('#apt3', 1, {opacity: 1});
var linkTween = new TweenMax.staggerFrom(['#link1', '#link2', '#link3', '#link4'], 0.1, {left: -2500}, 0.2);
//var anfrahrt = $("#anfahrt-img").paroller({ factor: '-0.5', type: 'background', direction: 'vertical'});
var controller = new ScrollMagic.Controller();

var house = new ScrollMagic.Scene({
  triggerElement: '#house', // starting scene, when reaching this element
})
.setTween(houseTween)
//.addIndicators();

var apt1 = new ScrollMagic.Scene({
  triggerElement: '#apt1'
})
.setTween(apt1Tween)
//.addIndicators();

var apt2 = new ScrollMagic.Scene({
  triggerElement: '#apt2'
})
.setTween(apt2Tween)
//.addIndicators();

var apt3 = new ScrollMagic.Scene({
  triggerElement: '#apt3'
})
.setTween(apt3Tween)
//.addIndicators();


// Buchung animation

  var link1 = new ScrollMagic.Scene({
    triggerElement: '#submit'
  })
  //.setTween(link1Tween)
  .setTween(linkTween)
  //.addIndicators();

  /*var anf = new ScrollMagic.Scene({
    triggerElement: '#link1'
  })
  .setTween(anfahrt)
  .addIndicators();*/



  controller.addScene([
    house,
    apt1,
    apt2,
    apt3,
    link1,
  ]);
