$(document).ready(function() {

  $(".tweet-feed").hover(
    function() {
      $(this).css("box-shadow", "10px 5px 5px grey");
    },
    function() {
      $(this).css("box-shadow", "none");
    }
  );

  $(".icons i").hover(
    function() {
      $(this).css("color", "#8B8000");
    },
    function() {
      $(this).css("color","#4056A1");
    }
  );
});