
const nhap = () => {
  var tt = prompt("Nhập thông tin sinh viên");
  if(tt === "")
    alert("Không được rỗng");
  var data = tt.split(';');
  document.getElementById("body").innerHTML += `<tr>
                                                  <td>${data[0]}</td>
                                                  <td>${data[1]}</td>
                                                  <td>${data[2]}</td>
                                                </tr>`;
}