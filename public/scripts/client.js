/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  //new tweet
  const $form = $("#input-new-tweet");
  $form.on("submit", postTweet);

  loadTweets();
});

//create one textbox for one tweet
const createTweetElement = (tweet) => {
  const $tweet = `
      <article class="tweet">
        <header>
          <div>
            <img src="${tweet.user.avatars}"/>
            <label>${tweet.user.name}</label>
          </div>
          <label>${tweet.user.handle}</label>
        </header>
        <p>${tweet.content.text}</p>
        <footer>
          <label>${timeago.format(tweet.created_at)}</label>
          <div class="icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>
    `;
  return $tweet;
};

//creating many display textboxes for tweets from database
const renderTweets = (tweets) => {
  const $tweetContainer = $("#tweets-container");
  $tweetContainer.empty();

  for (const tweet of tweets) {
    $tweetContainer.prepend(createTweetElement(tweet));
  }
};

//load tweets on the page
const loadTweets = () => {
  $.ajax({
    url: "/tweets",
    method: "GET",
    dataType: "json",
    success: (tweets) => {
      renderTweets(tweets);
    },
    error: (err) => {
      console.log("error: ", err);
    },
  });
};

//post new tweet & potential errors message
const postTweet = function (event) {
  event.preventDefault();

  $(".error").slideUp();
  const serializedData = $(this).serialize();

  if (!$(".tweet-text").val()) {
    const $error = $(".error");
    $error.html('<i class="fas fa-exclamation-circle"></i> Error: empty tweet');
    $error.slideDown("fast");
    return;
  }
  if ($(".tweet-text").val().length > 140) {
    const $error = $(".error");
    $error.html(
      '<i class="fas fa-exclamation-circle"></i> Error: max character length 140'
    );
    $error.slideDown("fast");
    return;
  }

  $.post("/tweets", serializedData, () => {
    loadTweets();
    $(".tweet-text").val("");
    $(".counter").val("140");
  });
};
