document.querySelector("link[id='theme-css']").href = "assets/css/light.css";

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector("link[id='theme-css']").href = "assets/css/dark.css";
}