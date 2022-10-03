// hide
$("#btn1").click(function () {
  $("#para1").hide("fast");
  // $("#para1").hide("slow");
  // $("#para1").hide(5000);
});

//  show
$("#btn2").click(function () {
  $("#para1").show("slow");
});

// toggle
$("#btn3").click(function () {
  $("#para1").toggle(1000);
});

// slide-up
$("#btn4").click(function () {
  $("#para2").slideUp("fast");
});

// slide-down
$("#btn5").click(function () {
  $("#para2").slideDown("slow");
});

// slide-toggle
$("#btn6").click(function () {
  $("#para2").slideToggle(250);
});

// fade-in
$("#btn7").click(function () {
  $("#para3").fadeIn("fast");
});

// fade-out
$("#btn8").click(function () {
  $("#para3").fadeOut("slow");
});

// fade toggle
