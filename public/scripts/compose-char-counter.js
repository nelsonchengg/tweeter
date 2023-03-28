$(document).ready(function() {

  let $tweetInput = $("#tweet-text");
  let $counter = $(".counter");

  $tweetInput.on('input', () => {
    let tweetLength = $tweetInput.val().length;
    let count = 140 - tweetLength;
    $counter.text(count);
    if (count < 0) {
      $counter.css("color", "red");
    } else {
      $counter.css("color", "rgb(82, 82, 82)");
    }
  });
});