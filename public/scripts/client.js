/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
for (let tweet of tweets) {
  const $tweets = createTweetElement(tweet)
}
return $(".tweets").prepend($tweets)
}

const createTweetElement = function(tweet) {
let $tweet = $("<article>").addClass("tweet-section")
const $header = $("<header>").addClass("tweetheader")
const $tweet_text = $("<div>").addClass("tweet-text").text(tweet.content.text)
const $footer = $("<footer>").addClass("footer")
const $user_icon = $("<div>").addClass("user-icon-container")
const $handle = $("<span>").addClass("span-at").text(tweet.user.handle)
const $icon_user = $("<i>").addClass("fas fa-user-alt")
const $username = $("<div>").addClass("username")
const $text = $("<p>").addClass("text")
const $span_time = $("<span>").addClass("spanDays").text(timeago.format(tweet.created_at))
const $icon_div = $("<div>").addClass("icondiv")
const $flag = $("<i>").addClass("far fa-flag")
const $retweet = $("<i>").addClass("fas fa-retweet")
const $heart = $("<i>").addClass("far fa-heart")

$tweet.append($header, $tweet_text, $footer)
$header.append($user_icon, $handle)
$footer.append($span_time, $icon_div, $flag, $retweet, $heart)
$tweet_text.append($text)
$user_icon.append($icon_user, $username)
  
  /* Your code for creating the tweet element */
// ...

return $tweet;
}

console.log(renderTweets(data));