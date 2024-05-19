var i;
  let slideIndex = 1;
  showSlide(slideIndex)
  function slideIn(num) {
    showSlide(slideIndex += 1);
  }
  function slideOut(num) {
    showSlide(slideIndex -= num);
  }
  
  function showSlide(num) {
    let docs = document.getElementsByClassName("slide");
    if (num > docs.length) { slideIndex = 1; }
  if (num < 1) { slideIndex = docs.length; }
  for (i = 0; i < docs.length; i++) {
    docs[i].style.display = "none";
  }
  docs[slideIndex - 1].style.display = "block";
}