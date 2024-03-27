// alternar entre fazer login e cadastrar

function myMenuFunction() {
  var i = document.getElementById("navMenu");
  if (i.className === "nav-menu") {
    i.className += " responsive";
  } else {
    i.className = "nav-menu";
  }
}

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");
function login() {
  x.style.left = "4px";
  y.style.right = "-520px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 1;
  y.style.opacity = 0;
}
function register() {
  x.style.left = "-510px";
  y.style.right = "5px";
  a.className = "btn";
  b.className += " white-btn";
  x.style.opacity = 0;
  y.style.opacity = 1;
}

// função para darkmode/lightmode
document.addEventListener("DOMContentLoaded", () => {
  const mode = document.getElementById("mode_icon");
  const form = document.querySelector(".modes");

  function setTheme(theme) {
    if (theme === "dark") {
      mode.classList.remove("fa-moon");
      mode.classList.add("fa-sun");
      form.classList.add("dark");
    } else {
      mode.classList.remove("fa-sun");
      mode.classList.add("fa-moon");
      form.classList.remove("dark");
    }
  }

  function toggleTheme() {
    const currentTheme = localStorage.getItem("theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  function setThemeFromPreference() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const systemPreference = prefersDarkScheme.matches ? "dark" : "light";
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", systemPreference);
    }
    setTheme(localStorage.getItem("theme"));
  }

  setThemeFromPreference();

  mode.addEventListener("click", () => {
    toggleTheme();
  });
});

import jwt_decode from "jwt-decode";

function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)

    const informations = document.querySelector(".h2_information")
    console.log(informations)
  
    fullName.textContent = data.name
    sub.textContent = data.sub
    given_name.textContent = data.given_name
    family_name.textContent = data.family_name
    email.textContent = data.email
    verifiedEmail.textContent = data.email_verified
    picture.setAttribute("src", data.picture)
  }
  
  window.onload = function () {
    const clientID = window.prompt("Cole a sua Cliente ID", "")
  
    google.accounts.id.initialize({
      client_id: clientID,
      callback: handleCredentialResponse
    });
  
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"), {
      theme: "filled_black",
      size: "large",
      type: "standard",
      shape: "pill",
      locale: "pt-BR",
      logo_alignment: "left",
    } // customization attributes
    );
  
    google.accounts.id.prompt(); // also display the One Tap dialog
}