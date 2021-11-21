/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

   
const loadTweets = function(){
  $.ajax({
    url: "/tweets",
    method: 'GET',
    data: $(".tweetSubmit").serialize(),
    dataType: 'json',
    success: function (data) {
      renderTweets(data);
    }
  })
}
loadTweets();



const addTweet = function(event) {
  const tweet = $('textarea');
  event.preventDefault();
  if(tweet.val() === null) {
    $(".tweetSubmit").prepend($("<div>").addClass('error').text("try again").fadeIn(200).fadeOut(4500));
    return
  } else if(tweet.val() === "" ) {
    $(".tweetSubmit").prepend($("<div>").addClass('error').text("Enter a tweet").fadeIn(200).fadeOut(4500));
    return;
  }else if(tweet.val().length > 140) {
    $(".tweetSubmit").prepend($("<div>").addClass('error').text("Tweet is too long").fadeIn(200).fadeOut(4500));
    return;
  }
  
  const serialized = $('.tweetSubmit').serialize()
  $.post('/tweets', serialized, function() {
    console.log(serialized)
    tweet.val('');
    $('.counter').text(140).removeClass('exceeded')
    loadTweets();
  });
}


$('.tweetSubmit').submit(addTweet);


const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
const $tweetsCon = $('.tweets')
$tweetsCon.empty();

for (let tweet of tweets) {
  let $tweets = createTweetElement(tweet)
  $tweetsCon.prepend($tweets)
}

}

const createTweetElement = function(tweet) {
let $tweet = $("<article>").addClass("tweet-section")
const $header = $("<header>").addClass("tweetheader")
const $tweet_text = $("<div>").addClass("tweet-text").text(tweet.content.text)
const $footer = $("<footer>").addClass("footer")
const $user_icon = $("<div>").addClass("user-icon-container")
const $handle = $("<span>").addClass("span-at").text(tweet.user.handle)
const $icon_user = $("<img>").attr('src', src=`${tweet.user["avatars"]}`)
const $username = $("<div>").addClass("username").text(tweet.user.name)
const $text = $("<p>").addClass("text")
const $span_time = $("<span>").addClass("spanDays").text(timeago.format(tweet.created_at))
const $icon_div = $("<div>").addClass("icondiv")
const $flag = $("<i>").addClass("far fa-flag").attr('id', 'flag')
const $retweet = $("<i>").addClass("fas fa-retweet").attr('id', 'retweet')
const $heart = $("<i>").addClass("far fa-heart").attr('id', 'heart')

$tweet.append($header, $tweet_text, $footer)
$header.append($user_icon, $handle)
$footer.append($span_time, $icon_div)
$icon_div.append($flag, $retweet, $heart)
$tweet_text.append($text)
$user_icon.append($icon_user, $username)
  
  /* Your code for creating the tweet element */
// ...

return $tweet;
}

