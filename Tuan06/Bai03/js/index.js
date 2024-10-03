const array = [
  "b2.jpg",
  "b3.jpg",
  "b4.jpg",
  "b5.jpg",
  "b6.jpg",
  "b7.jpg",
  "b8.jpg",
  "b9.jpg",
  "b10.jpg",
  "b1.jpg"
]

document.getElementById("play").onclick = () => {
  var image = document.getElementById("image");
  let i = 0;
  var time = setInterval(() => {
    image.src = `../img/${array[i]}`;
    image.alt = array[i];
    i++;
    if(i == array.length){
      i = 0;
    }
  },500);
  document.getElementById("stop").onclick = () => {
    clearTimeout(time);
  }
}