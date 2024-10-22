$(document).ready(function () {
  $("#name").blur(function (e) { 
    e.preventDefault();

    var name = $(this).val();
    let reg = /^([A-Z][a-z]+)( [A-Z][a-z]+)+$/
    if(!reg.test(name)){
      $(this).next().text("Họ tên không được bỏ trống, họ tên phải từ 2 từ trở lên, mỗi ký tự đầu phải viết hoa");
    }
    else{
      $(this).next().text("");
    }
  });
  $("#phone").blur(function (e) { 
    e.preventDefault();

    var phone = $(this).val();
    let reg = /^[0-9]{3}-[0-9]{6}$/
    if(!reg.test(phone)){
      $(this).next().text("Số điện thoại không rỗng, nhập theo định dạng sau: XXX-YYYYYY, trong đó X, Y là các ký tự số.");
    }
    else{
      $(this).next().text("");
    }
  });
  $("#date").blur(function (e) { 
    e.preventDefault();
    
    var date = $(this).val();
    var year = parseInt(date.substring(0,4));
    var yearCur = (new Date()).getFullYear();
    if(yearCur - year < 15 || yearCur - year > 18){
      $(this).next().text("Ngày sinh hợp lệ khi tuổi trên 15 và dưới 18");
    }
    else{
      $(this).next().text("");
    }
  });
  $("#address").blur(function (e) { 
    e.preventDefault();
    var address = $(this).val();
    if(address == ""){
      $(this).next().text("Địa chỉ không được rỗng");
    }
    else{
      $(this).next().text("");
    }
  });
  $("#course").change(function(){
    var fee = $(this).val();
    $("#fe").val(fee);

  })
  $("#file").change(function (e) { 
    e.preventDefault();
    var file = $(this).val();
    if(!(file.endsWith(".jpg") || file.endsWith(".png") || file.endsWith(".gif"))){
      $(this).next().text("Ảnh đại diện là các file hình .jpg, .png, .gif");
    }
    else{
      $(this).next().text("");
    }
  });
  var i = 1;
  $("#submit").click(function(){
    var name = $("#name").val();
    var phone = $("#phone").val();
    var date = $("#date").val();
    var address = $("#address").val();
    var fee = $("#fe").val();
    var file = $("#file").val().get
    var course = "";
    if(fee == '5000000'){
      course = "2 tuần"
    }
    else if(fee == '8000000'){
      course = "4 tuần"
    }
    else course = "6 tuần"
    document.getElementById("data").innerHTML += `<tr>
                                                    <td>${i}</td>
                                                    <td>${name}</td>
                                                    <td>${file}</td>
                                                    <td>${phone}</td>
                                                    <td>${date}</td>
                                                    <td>${address}</td>
                                                    <td>${course}</td>
                                                    <td>${fee}</td>
                                                  </tr>`
    $("#myModal .btn-close").click();
    i++;                                              
  })
});