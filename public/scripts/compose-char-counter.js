$(document).ready(function() {

  let $tweetInput = $("#tweet-text");
  let $counter = $(".counter");

  $tweetInput.on('input', () => {
    let tweetLength = $tweetInput.val().length;
    $counter.text(140 - tweetLength);
    if (140 - tweetLength < 0) {
      $counter.css("color", "red");
    }
  });
});