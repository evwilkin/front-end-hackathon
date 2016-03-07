$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'florence', 'venice', 'santorini', 'athens', 'reykjavik', 'iceland', 'end'],
    navigation: true,
    navigationTooltips: ['home', 'florence', 'venice', 'santorini', 'athens', 'reykjavik', 'iceland', 'end'],
    fixedElements: "#navbar",
    paddingTop: '80px'
  });
});