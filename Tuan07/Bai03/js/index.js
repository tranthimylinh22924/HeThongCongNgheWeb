$(document).ready(function () {
  $("#register").click((e) => {
    e.preventDefault();
    var name = $("#name").val();
    var username = $("#username").val();
    var pass1 = $("#pass1").val();
    var pass2 = $("#pass2").val();
    var birthDate = $("#birthDate").val();
    var phone = $("#phone").val();
    var address = $("#address").val();
    var email = $("#email").val();
    var select = $("#select").val();

    if(name == ''){
      alert("Họ và tên không được rỗng");
      $("#name").focus();
      return;
    }

    let regUserName = /^.{6,}$/;
    if(!regUserName.test(username)){
      alert(("Username ít nhất 6 ký tự"))
      $("#username").focus();
      return;
    }
    
    if(pass1 == ''){
      alert("Mật khẩu không được rỗng");
      $("#pass1").focus();
      return;
    }

    if(pass2 == ''){
      alert("Xác nhận mật khẩu không được rỗng");
      $("#pass2").focus();
      return;
    }

    if(pass1 != pass2){
      alert("Mật khẩu không giống nhau");
      $("#pass2").focus();
      return;
    }

    let regPhone = /^[0-9]+$/;
    if(!regPhone.test(phone)){
      alert("Số điện thoại phải là số");
      $("#phone").focus();
      return;
    }
    if(address == ''){
      alert("Địa chỉ không được rỗng");
      $("#address").focus();
      return;
    }

    let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regEmail.test(email)){
      alert("Không đúng định dạng email");
      $("#email").focus();
      return;
    }
    var obj = {
      name : name,
      username : username,
      pass1 : pass1,
      pass2 : pass2,
      birthDate : birthDate,
      phone : phone,
      address : address,
      email : email,
      select : select
    }
    localStorage.setItem("data",JSON.stringify(obj));
    window.location = "thongtin.html";
  })
});