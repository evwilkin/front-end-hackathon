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


  function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('muteYouTubeVideoPlayer', {
      videoId: 'I4UC70KXj3M',
      list: 'I4UC70KXj3M', // YouTube Video ID
      playerVars: {
        autoplay: 1,        // Auto-play the video on load
        controls: 0,        // Show pause/play buttons in player
        showinfo: 0,        // Hide the video title
        loop: 1,            // Run the video in a loop
        fs: 0,              // Hide the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        autohide: 0         // Hide video controls when playing
      },
      events: {
        onReady: function(e) {
          e.target.mute();
        },
        onStateChange: function(e){
          if (e.data === YT.PlayerState.ENDED) {
              player.playVideo(); 
          }
        }
      }
    });
  }
});