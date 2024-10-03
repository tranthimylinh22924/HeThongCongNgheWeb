const tinhToan = (x) =>{
  var a = document.getElementById("soMot").value;
  var b = document.getElementById("soHai").value;
  var kq = document.getElementById("kq");
  if(a == "" || b == "")
    alert("a hoặc b không thể rỗng");
  a = parseInt(a);
  b = parseInt(b);
  if(x == '+'){
    kq.value = a+b;
  }
  else if(x == '-'){
    kq.value = a-b;
  }
  else if(x == '*'){
    kq.value = a*b;
  }
  else{
    if(b == 0){
      alert("Không thể chia cho 0");
    }
    else{
      kq.value = a/b;
    }
  }
}
