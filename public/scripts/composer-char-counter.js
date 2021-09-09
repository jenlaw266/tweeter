$(document).ready(function () {
  $(".tweet-text").on("input", function () {
    const $count = $(this).parent().find(".counter");
    let charLimit = 140;
    let remainingChar = charLimit - $(this).val().length;
    if (remainingChar >= 0) {
      $count.css("color", "");
    } else {
      $count.css("color", "red");
    }
    $count.text(remainingChar);
  });
});
