// setting the page to go to top on reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    document.title = "GLOBAL GHANAIAN BUSINESS LEADERS [GGBL] ACADEMY.";
}

// setting background image to slide
// var backImage = ['./assets/1.jpg', './assets/2.jpg', './assets/3.jpg'];
  
// function changeBackImage(x) {
//   document.getElementById("parent").style.backgroundImage = "url(" + backImage[x] + ")";
//   document.getElementsById("parent").style.backgroundImage.innerText = backImage[x];
// }
// function startTimer() {
//   var x = 0;
//   changeBackImage(x);
//   setInterval(function() {
//     x = x + 1 >= backImage.length ? 0 : x + 1;
//     changeBackImage(x);
//   }, 3000);
// }
// startTimer();