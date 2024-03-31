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



function handleCredentialResponse(response) {
  const data = response.credential

  const informations = document.querySelector(".h2_information").innerHTML = `${data.email}`
  console.log(informations)
  console.log(data)


  // Verifique se a propriedade 'email' está presente no objeto
  if (data.email) {
    // Atualize os elementos HTML com os dados do usuário
    fullName.textContent = data.name;
    sub.textContent = data.sub;
    given_name.textContent = data.given_name;
    family_name.textContent = data.family_name;
    email.textContent = data.email;
    verifiedEmail.textContent = data.email_verified;
    picture.setAttribute("src", data.picture);
  } else {
    console.error("Email não encontrado na resposta de credenciais.");
  }

  /*sub.textContent = data.sub
  given_name.textContent = data.given_name
  family_name.textContent = data.family_name
  email.textContent = data.email
  verifiedEmail.textContent = data.email_verified
  picture.setAttribute("src", data.picture)*/
}


function handleCredentialResponse(response) {
  if (response.credential) {
    console.log("Encoded JWT ID token: " + response.credential);
    var jwtToken = response.credential;
    localStorage.setItem('jwtToken', jwtToken); // Armazenar o token na sessionStorage
    // Redirecionar para a página index.html
    window.location.href = "index.html";
} else {
    console.error("Credencial não encontrada na resposta.");
    // Lidar com o erro de forma apropriada
}
}


function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

window.onload = function () {
  google.accounts.id.initialize({
      client_id: "939125828914-u6tbs2k30r4tn6fr17k0erjb6j39l69d.apps.googleusercontent.com",
      callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}