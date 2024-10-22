$(document).ready(function () {
  $("#muavao").focus();
  $("#car").change(function (e) { 
    var value = $(this).val();
    var img = value.split(";")[0];
    var price = value.split(";")[1];
    $("#image").attr("src",img);
    $("#price").html(price);
  });

  $("#muavao").blur(function () { 
    var value = $(this).val();
    let reg = /^[0-9]+$/;
    if(reg.test(value)){
      $("#state").attr("disabled",false);
    }
    else{
      $("#state").attr("disabled",true);
    }
  });
  $("#update").click(function(){
    var mv = $("#muavao").val();
    var br = $("#banra").val();
    var vang = document.getElementById("vang").checked;
    if(vang){
      $("#vang1").html(mv);
      $("#vang2").html(br);
    }
    else{
      $("#usd1").html(mv);
      $("#usd2").html(br);
    }
  })
});