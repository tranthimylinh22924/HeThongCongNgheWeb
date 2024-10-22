$(document).ready(function () {
  var obj = JSON.parse(localStorage.getItem("data"));
  $("#name").html(obj.name);
  $("#username").html(obj.username);
  $("#pass1").html(obj.pass1);
  $("#pass2").html(obj.pass2);
  $("#birthDate").html(obj.birthDate);
  $("#phone").html(obj.phone);
  $("#address").html(obj.address);
  $("#email").html(obj.email);
  $("#select").html(obj.select);
});