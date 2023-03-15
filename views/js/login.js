function validateForm() {
  var username = document.forms["loginForm"]["username"].value;
  var password = document.forms["loginForm"]["password"].value;
  if (username == "" || username != "Hinamizawa" && username != "hinamizawa") {
    alert("Username must be filled out");
    return false;
  }
  if (password == "" || password != "root") {
    alert("Password must be filled out");
    return false;
  }
  // If the user successfully logged in
  window.location.href = "../html/logged_in.html";
  return false;
}