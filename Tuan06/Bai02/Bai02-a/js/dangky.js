
document.getElementById("submit").onclick = (e) => {
  e.preventDefault();
  var tk = document.getElementById("hoten").value;
  var mk = document.getElementById("mk").value;
  localStorage.setItem("tk",tk);
  localStorage.setItem("mk",mk);
  window.location = "../html/dangnhap.html"
}