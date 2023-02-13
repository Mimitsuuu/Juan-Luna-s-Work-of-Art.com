var viewport = window;
var root = document.querySelector("html");
var maxScroll;

viewport.addEventListener("scroll", function () {
  var scrolled =
    window.pageYOffset ||
    window.scrollY ||
    window.scrollTop ||
    document.getElementsByTagName("html")[0].scrollTop;
  root.style.fontSize = (scrolled / maxScroll) * 50;
});

viewport.addEventListener("resize", function () {
  console.log(root.offsetHeight)
  console.log(viewport.innerHeight)

  maxScroll = root.offsetHeight - viewport.innerHeight;
  console.log(maxScroll);
});

viewport.dispatchEvent(new Event("resize"));

