$(() => {
  $(document).scroll(buttonAppear);
  $("#up").on("click", toTop);
});

const buttonAppear = () => {
  console.log("am i here");
  if ($(document).scrollTop() > 100) {
    return $("#up").css("display", "block");
  }
  $("#up").css("display", "none");
};

const toTop = () => {
  $(document).scrollTop(0);
};
