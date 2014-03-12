// Lets Create A Wrapper in jQuery's Document Ready Syntax
// for the functions we will build out today.

$(function() {
  function format_boxes() {
    $(".box").css({
      "height": "150px",
      "width": "150px",
      "display": "inline-block",
      "float": "left"
    })
  }

  function odd() {
    $(".odd").css({
      "backgroundColor": "red"
    })
  }

  function even() {
    $(".even").css({
      "backgroundColor": "black"
    })
  }

  function greeting() {
    if (confirm("Are you ready to play?")) {
      $("#main-container").css({
        "opacity": "1"
      })
      format_boxes();
      odd();
      even();
    }
  }

  function heading_animate() {
    $("h1").animate({
      opacity: 1,
      left: "+=50",
    }, 5000, function() {

    });
  }

  heading_animate();
  greeting();

  function toggler() {
    $(".box").click(function() {
      $(this).toggleClass("hide");
    });
  }
  toggler();
});