const chon = () => {
  var textList = Array.from(document.querySelectorAll("input[type='checkbox']")).filter(item => item.checked).map(item => {
    return item.nextElementSibling.textContent;
  });

  document.getElementById("kq").innerHTML = textList;
}