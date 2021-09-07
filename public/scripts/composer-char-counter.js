$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    //$(".counter").text(140 - $(this).val().length - 1);
    const $countingDown = $(this).closest("form").find(".counter");
    let charLimit = 140;
    let remainingChar = charLimit - $(this).val().length;
    if (remainingChar < 0) {
      $countingDown.css("color", "red");
    } else {
      $countingDown.css("color", "");
    }
    $countingDown.text(remainingChar);
  });
});
