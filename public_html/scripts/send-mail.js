function sendMail() {
  var body = document.getElementById("input-form").value;
  window.location.href =
    "mailto:james.richie.sulaeman@gmail.com?subject=Hey James! Let's Get In Touch&body=" +
    body;
}
