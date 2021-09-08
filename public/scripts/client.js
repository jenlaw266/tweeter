/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
$(() => {
  const tweetData = {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
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

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $("#tweets-container").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  //taking array of tweet objects and appending to #tweets-container
  const renderTweets = (tweet) => {};
});

/*  const $tweet = $(`<article class="tweet">Hello world</article>`);
 */
