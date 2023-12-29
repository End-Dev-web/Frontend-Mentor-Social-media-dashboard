// import "/sass/main.scss";

const toggleSwitch = document.querySelector("[switch-toggle]");
const spanEl = document.querySelector("[name-theme]");

const switchTheme = () => {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
};

const storedTheme = localStorage.getItem("theme");

const systemeThemeDark = window.matchMedia(
  "prefers-color-scheme: dark"
).matches;

const initialTheme = storedTheme ?? (systemeThemeDark ? "dark" : "light");

document.documentElement.setAttribute("data-theme", initialTheme);

let locals = localStorage.getItem("theme");
if (locals === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

window.addEventListener("DOMContentLoaded", function () {
  toggleSwitch.addEventListener("click", switchTheme);
});
