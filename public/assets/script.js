document.querySelector("link[id='theme-css']").href = "assets/css/light.css";

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.querySelector("link[id='theme-css']").href = "assets/css/dark.css";
}

function slideDown(element, delay) {
  setTimeout(() => {
    element.classList.remove("hidden")
    element.classList.add("animate__animated")
    element.classList.add("animate__fadeInDown")
  }, delay)
}

function slideIn(element, delay) {
  setTimeout(() => {
    element.classList.remove("hidden")
    element.classList.add("animate__animated")
    element.classList.add("animate__fadeInUp")
  }, delay)
  setTimeout(() => {
    element.classList.remove("animate__animated")
    element.classList.remove("animate__fadeInUp")
  }, delay + 1000)  
}