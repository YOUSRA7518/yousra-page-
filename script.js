document.querySelectorAll(".polaroid article img").forEach(img => {
  const { src } = img;
  img.closest("article").style.backgroundImage = `url(${src})`;
});
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
