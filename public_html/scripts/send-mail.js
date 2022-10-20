function sendMail() {
  var body = document.getElementById("input-form").value;
  window.location.href = "mailto:james.richie.sulaeman@gmail.com?body=" + body;
}
