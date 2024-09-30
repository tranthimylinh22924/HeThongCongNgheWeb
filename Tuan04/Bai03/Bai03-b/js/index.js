const carouselInner = document.getElementById("mySlide");
const carouselWidth = carouselInner.scrollWidth;
const carouselItem = document.querySelectorAll(".section-three .carousel-item")[0].scrollWidth;

var pos = 0;
var end = 11;
setInterval(() => {
  if (pos + 3 < end) {
    pos++;
    $("#mySlide").animate({
      scrollLeft: pos * carouselItem
    },500)
  }
  else {
    pos = 0
    $("#mySlide").animate({
      scrollLeft: pos * carouselItem
    },500)
  }
}, 2000);