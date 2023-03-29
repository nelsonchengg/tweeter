$(document).ready(function() {

  let $tweetInput = $("#tweet-text");
  let $counter = $(".counter");

  $tweetInput.on('input', () => {
    let tweetLength = $tweetInput.val().length;
    let count = 140 - tweetLength;
    if (count < 0) {
      $counter.css("color", "red");
    } else {
      $counter.css("color", "rgb(88, 88, 88)");
    }
    $counter.text(count);
  });
});