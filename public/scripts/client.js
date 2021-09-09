/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {
  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
      success: (tweets) => {
        console.log("tweets here", tweets);
        renderTweets(tweets);
      },
      error: (err) => {
        console.log("error: ", err);
      },
    });
  };

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

  const $form = $("#input-new-tweet");
  $form.on("submit", function (event) {
    event.preventDefault();

    const serializedData = $(this).serialize();

    if (!$(".tweet-text").val()) {
      alert("no data");
      return;
    }
    if ($(".tweet-text").val().length > 140) {
      alert("tweet is too long");
      return;
    }

    $.post("/tweets", serializedData, (response) => {
      loadTweets();
    });
  });

  //taking array of tweet objects and appending to #tweets-container
  const renderTweets = (tweets) => {
    const $tweetContainer = $("#tweets-container");

    for (const tweet of tweets) {
      $tweetContainer.prepend(createTweetElement(tweet));
    }
  };

  loadTweets();
});
