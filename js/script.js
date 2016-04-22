$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'florence', 'venice', 'santorini', 'athens', 'reykjavik', 'iceland', 'about'],
    navigation: true,
    navigationTooltips: ['home', 'florence', 'venice', 'santorini', 'athens', 'reykjavik', 'iceland', 'about'],
    loopBottom: false,
    afterRender: function(){
      scrollOverflow: true
    }
  });

  $('#showMenu').on("click", function() {
    $('#menu').slideToggle(350);
  });

  $('a.button').on("click", function() {
    $('#menu').slideToggle(350);
  });
});