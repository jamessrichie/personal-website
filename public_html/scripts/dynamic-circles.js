window.onload = function () {
  var bubble1 = document.getElementById("bubble1");
  document.body.addEventListener("mousemove", function (e) {
    (bubble1.style.left = "calc(7.5em - " + 0.08 * (e.clientX - 800) + "px)"),
      (bubble1.style.top = "calc(13em - " + 0.05 * (e.clientY - 500) + "px)");
  });

  var bubble2 = document.getElementById("bubble2");
  document.body.addEventListener("mousemove", function (e) {
    (bubble2.style.left = "calc(18.5em - " + 0.065 * (e.clientX - 800) + "px)"),
      (bubble2.style.top = "calc(15em - " + 0.04 * (e.clientY - 500) + "px)");
  });

  var bubble3 = document.getElementById("bubble3");
  document.body.addEventListener("mousemove", function (e) {
    (bubble3.style.left = "calc(34.5em - " + 0.05 * (e.clientX - 800) + "px)"),
      (bubble3.style.top = "calc(22em - " + 0.03 * (e.clientY - 500) + "px)");
  });

  var bubble4 = document.getElementById("bubble4");
  document.body.addEventListener("mousemove", function (e) {
    (bubble4.style.left = "calc(17.5em - " + 0.065 * (e.clientX - 800) + "px)"),
      (bubble4.style.top = "calc(31em - " + 0.04 * (e.clientY - 500) + "px)");
  });

  var bubble5 = document.getElementById("bubble5");
  document.body.addEventListener("mousemove", function (e) {
    (bubble5.style.left = "calc(29.5em - " + 0.05 * (e.clientX - 800) + "px)"),
      (bubble5.style.top = "calc(35em - " + 0.03 * (e.clientY - 500) + "px)");
  });

  var bubble6 = document.getElementById("bubble6");
  document.body.addEventListener("mousemove", function (e) {
    (bubble6.style.left = "calc(7.5em - " + 0.08 * (e.clientX - 800) + "px)"),
      (bubble6.style.top = "calc(43em - " + 0.05 * (e.clientY - 500) + "px)");
  });
};
