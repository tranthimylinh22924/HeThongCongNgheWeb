document.getElementById("change").onclick = () => {
  
  var value = Array.from(document.getElementsByName("Chon")).filter(item => item.checked).map(item => item.id)[0];
  var text = document.getElementById("text");
  var color = document.getElementById("mau").value;
  console.log(color);
  if(value === "bg"){
    if(color === "0"){
      alert("vui long chon mau");
      return;
    }
    text.style.backgroundColor = color;
  }
  else{
    text.style.color = color;
  }
}

document.getElementById("cancel").onclick = () => {
  text.style.backgroundColor = "white";
  text.style.color = "black";
}