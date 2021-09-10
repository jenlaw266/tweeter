$(document).ready(function () {
  $(".tweet-text").on("input", counter);
  //Stretch: Make second onChange to clear out error message when typing
});

const counter = function () {
  const $count = $(this).parent().find(".counter");
  let charLimit = 140;
  let remainingChar = charLimit - $(this).val().length;
  if (remainingChar < 0) {
    $count.css("color", "red");
    return;
  }
  $count.css("color", "");

  $count.text(remainingChar);
};
