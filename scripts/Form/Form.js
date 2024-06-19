// switching between registration and login to the form

function myMenuFunction() {
  var i = document.getElementById("navMenu");
  if (i.className === "nav-menu") {
    i.className += " responsive";
  } else {
    i.className = "nav-menu";
  }
}

const a = document.getElementById("loginBtn");
const b = document.getElementById("registerBtn");
const x = document.getElementById("login");
const y = document.getElementById("register");
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


// function to log in with google

function handleCredentialResponse(response) {
  const data = response.credential

  const informations = document.querySelector(".h2_information").innerHTML = `${data.email}`

  if (data.email) {
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

}

window.onload = function () {
  const token = localStorage.getItem('jwtToken');

  if (!token) {
    // Redireciona para a página de login se não houver um JWT válido
    window.location.href = '/Form.html';
  } else {
    // Decodificar o token JWT
    const user = parseJwt(token);
    // Atualizar a UI com as informações do usuário
    updateUserInfo(user);
  }
}

//  jwt manipulation

function updateUserInfo(user) {
  const avatarElement = document.getElementById('user_avatar');
  const nameElement = document.querySelector('.item-description');
  if (nameElement) nameElement.innerHTML = user.name;
  if (avatarElement) avatarElement.src = user.picture;
}



function handleCredentialResponse(response) {

  const jwtToken = response.credential;
  localStorage.setItem('jwtToken', jwtToken);

  const decodedToken = parseJwt(jwtToken);

  // Redirecionar para a página index.html com informações como parâmetros de query string
  const queryString = "?name=" + encodeURIComponent(decodedToken.name) +
    "&email=" + encodeURIComponent(decodedToken.email) +
    "&picture=" + encodeURIComponent(decodedToken.picture);
  window.location.href = "index.html" + queryString;
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "647322329932-g0tfojd1a4mfhimglfrn478lge1h0rkq.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}