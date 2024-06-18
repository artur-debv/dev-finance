// Função para obter parâmetros de query string da URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "g");
    var results = [];
    var match;
    while (match = regex.exec(url)) {
        results.push(decodeURIComponent(match[2].replace(/\+/g, " ")));
    }
    return results;
    
}

function UpdateData(name,email,pictureUrl){
    document.querySelector('.item-description').innerHTML =   name
    avatarElement.src = pictureUrl;
}

// Obter o valor do parâmetro 'picture' da URL
const pictureUrl = getParameterByName('picture');

// Selecionar o elemento com o id 'user_avatar'
const avatarElement = document.getElementById('user_avatar');

// Definir o atributo src do elemento <img> com a URL da imagem
avatarElement.src = pictureUrl;

// Obter os valores dos parâmetros de query string
const name = getParameterByName('name');
const email = getParameterByName('email');

UpdateData(name,email,pictureUrl)

var newUrl = window.location.pathname;
window.history.pushState({}, '', newUrl);

 // Selecionar elementos do DOM
 const menuBar = document.getElementById('menu-bar');
 const menuIcon = document.getElementById('menu-icon');
 const sidebar = document.getElementById('sidebar');
