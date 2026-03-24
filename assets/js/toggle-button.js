let themeClickCounter = 0;
let barrelRollTimeout = null;

function toggleTheme() {
  const body = document.body;
  const root = document.documentElement;
  const icon = document.getElementById("themeIcon");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    icon.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    icon.textContent = "🌸";
    localStorage.setItem("theme", "light");
  }

  themeClickCounter += 1;
  if (themeClickCounter >= 5) {
    themeClickCounter = 0;
    const rollTarget = body; // use body for reliable page rotation
    rollTarget.classList.add("barrel-roll");

    // show secret full-row item on products page after barrel roll
    if (window.location.pathname.includes("products.html")) {
      body.classList.add("show-secret");
    }

    if (barrelRollTimeout) {
      clearTimeout(barrelRollTimeout);
    }
    barrelRollTimeout = setTimeout(() => {
      rollTarget.classList.remove("barrel-roll");
    }, 1000);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem("theme");
  const icon = document.getElementById("themeIcon");
  if (saved === "dark") {
    document.body.classList.add("dark");
    icon.textContent = "🌙";
  } else {
    icon.textContent = "🌸";
  }
});