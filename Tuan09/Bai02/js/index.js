$(document).ready(function () {
  $("#maTour").blur(function (e) { 
    e.preventDefault();
    var maTour = $(this).val();
    let reg = /^[A-Z]{3}-[A-Z]{3}-[0-9]{2}-[0-9]{4}$/
    if(!reg.test(maTour)){
      $(this).next().text("XXX-XXX-mm-yyyy với X là các ký tự hoa chỉ thông tin điểm khởi hành và điểm đến, mm: tháng khởi hành, yyyy: năm khởi hành. ");
    }
    else{
      $(this).next().text("");
    }
  });
  $("#hanhTrinh").blur(function (e) { 
    e.preventDefault();

    var hanhTrinh = $(this).val();
    if(hanhTrinh == ""){
      $(this).next().text("Hành trình không đươc rỗng");
    }
    else{
      $(this).next().text("");
    }
  });
  $("#ngayKhoiHanh").blur(function (e) { 
    e.preventDefault();
    var ngayKhoiHanh = Date.parse($(this).val());
    var ngayHienTai = Date.now();
    var ngay = ngayKhoiHanh - ngayHienTai;
    if(ngay < 0 || ngay/(3600*24*1000) < 30){
      $(this).next().text("Ngày khởi hành phải sau ngày hiện tại 30 ngày");
    }
    else{
      $(this).next().text("");
    }
  });
  $("#thoiGian").blur(function (e) { 
    e.preventDefault();
    var thoiGian = $(this).val();
    if(thoiGian == ""){
      $(this).next().text("Thời gian không được rỗng");
    }
    else{
      $(this).next().text("");
    }
  });
  $("#giaTour").change(function(){
    var giaTour = $(this).val();
    let reg = /^[1-9][0-9]*$/
    if(!reg.test(giaTour)){
      $(this).next().text("Giá phải > 0");
    }
    else{
      $(this).next().text("");
    }
  })
  $("#anhDaiDien").change(function (e) { 
    e.preventDefault();
    var anhDaiDien = $(this).val();
    if(!(anhDaiDien.endsWith(".jpg") || anhDaiDien.endsWith(".png") || anhDaiDien.endsWith(".gif"))){
      $(this).next().text("Ảnh đại diện là các file hình .jpg, .png, .gif");
    }
    else{
      $(this).next().text("");
    }
  });
  var i = 1;
  $("#submit").click(function(){
    var maTour = $("#maTour").val();
    var hanhTrinh = $("#hanhTrinh").val();
    var ngayKhoiHanh = $("#ngayKhoiHanh").val();
    var thoiGian = $("#thoiGian").val();
    var giaTour = $("#giaTour").val();
    var anhDaiDien = $("#anhDaiDien").val();
    document.getElementById("data").innerHTML += `<tr>
                                                    <td>${i}</td>
                                                    <td>${maTour}</td>
                                                    <td>${hanhTrinh}</td>
                                                    <td>${ngayKhoiHanh}</td>
                                                    <td>${thoiGian}</td>
                                                    <td>${giaTour}</td>
                                                    <td>${anhDaiDien}</td>
                                                  </tr>`
    $("#myModal .btn-close").click();
    i++;                                              
  })
});