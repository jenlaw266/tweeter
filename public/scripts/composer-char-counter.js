$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    const $countingDown = $(this).parent().find(".counter");
    let charLimit = 140;
    let remainingChar = charLimit - $(this).val().length; //should I re-name $remainingChar
    if (remainingChar >= 0) {
      $countingDown.css("color", "");
    } else {
      $countingDown.css("color", "red");
    }
    $countingDown.text(remainingChar);
  });
});
