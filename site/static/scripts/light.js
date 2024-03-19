function lightScheme() {
  // change the tags
  document.documentElement.style.setProperty("--color-text", "#000000");
  document.documentElement.style.setProperty("--color-text-dim", "#0000007a");
  document.documentElement.style.setProperty("--color-background", "#FFFCF2");
  document.documentElement.style.setProperty(
    "--color-postcard-text",
    "#484848",
  );
  document.documentElement.style.setProperty("--catppuccino-crust", "#dce0e8");
  document.documentElement.style.setProperty("--color-primary", "#FF4A6A");
  document.documentElement.style.setProperty(
    "--color-primary-dim",
    "#FF4A6A7f",
  );

  // set body - background-color and background-image to none
}

function darkScheme() {
  document.documentElement.style.setProperty("--color-text", "#ffffff");
  document.documentElement.style.setProperty("--color-text-dim", "#ffffff7a");
  document.documentElement.style.setProperty("--color-background", "#020E13");
  document.documentElement.style.setProperty(
    "--color-postcard-text",
    "#b4befe5f",
  );
  document.documentElement.style.setProperty(
    "--color-white-accent",
    "#ffffff35",
  );
  document.documentElement.style.setProperty("--catppuccino-crust", "#1e1e2d");
  document.documentElement.style.setProperty("--color-primary", "#FF4A6A");
  document.documentElement.style.setProperty(
    "--color-primary-dim",
    "#FF4A6A7f",
  );
}

// store user toggle preference in local storage. Site must remember what theme was last used
// and apply it when the user returns to the site.

function ThemeSwitch() {
  // on click of button with class toggle-theme, store theme in local and switch
  var theme = localStorage.getItem("theme");
  if (theme === "light") {
    localStorage.setItem("theme", "dark");
    darkScheme();
  } else {
    localStorage.setItem("theme", "light");
    lightScheme();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.onload = function () {
    const toggle = document.getElementById("theme-toggle");
    toggle.onclick = function () {
      toggle.style.transition = "transform 1s ease-in-out";
      if (toggle.style.transform === "rotate(3600deg)") {
        toggle.style.transform = "rotate(0deg)";
      } else {
        toggle.style.transform = "rotate(3600deg)";
      }
      ThemeSwitch();
    };
  };
  // check local storage for theme
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    lightScheme();
  } else {
    darkScheme();
  }
});
