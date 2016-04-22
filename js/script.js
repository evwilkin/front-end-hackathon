$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'florence', 'venice', 'santorini', 'athens', 'reykjavik', 'iceland', 'end'],
    navigation: true,
    navigationTooltips: ['home', 'florence', 'venice', 'santorini', 'athens', 'reykjavik', 'iceland', 'end'],
    loopBottom: true
  });

  $('#showMenu').on("click", function() {
    $('#menu').slideToggle();
  });

  $('a.button').on("click", function() {
    $('#menu').slideToggle();
  });
});