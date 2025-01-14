/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const safe = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const renderTweets = function(data) {
  for (const userInfo of data) {
    $(".tweets").prepend(createTweetElement(userInfo));
  };
};

const createTweetElement = function(data) {
  const time = timeago.format(data.created_at, "en_US");
  return `<article class="tweet">
  <header class="handle-info">
    <div class="avatar-name">
      <img src=${data.user.avatars}></img>
      <div>${data.user.name}</div>
    </div>
    <div>${data.user.handle}</div>
  </header>
  <p class="tweet-content">${safe(data.content.text)}</p>
  <footer class="more-actions">
    <time>${time}</time>
    <div class="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-sharp fa-solid fa-retweet"></i>
      <i class="fa-solid fa-thumbs-up"></i>
    </div>
  </footer>
  </article>`;
};

const loadTweets = function() {
  $.ajax({
    method: "GET",
    url: "/tweets"
  })
    .then(function(data) {
      renderTweets(data);
    });
};

const addingToFeed = function() {
  $.ajax({
    method: "GET",
    url: "/tweets"
  })
    .then(function(data) {
      $(".tweets").prepend(createTweetElement(data[data.length - 1]));
    });
};

$(document).ready(function() {
  loadTweets();

  $(".tweet-form").on("submit", function(event) {
    event.preventDefault();
    const input = $("#tweet-text").serialize();
    const tweetLength = $("#tweet-text").val().length;

    if (tweetLength) {
      $(".error-message").slideUp();
    }

    if (tweetLength > 140) {
      $(".error-message").text("Tweet is too long!").slideDown();
      return;
    }

    if (tweetLength === 0) {
      $(".error-message").text("Type something you clown!").slideDown();
      return;
    }

    $.ajax({
      method: "POST",
      url: "/tweets",
      data: input,
    })
      .then(function() {
        addingToFeed();
        $("#tweet-text").val("");
        $(".counter").val(140);
      });
  });
});


