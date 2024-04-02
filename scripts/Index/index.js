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

 // Verificar autenticação do usuário antes de carregar a página
 window.onload = function() {
    if (!isAuthenticated()) {
        // Redirecionar usuário não autenticado para a página de login
        window.location.href = ''; // Substitua 'login.html' pela página de login real
    }
}

// Função para verificar se o usuário está autenticado
function isAuthenticated() {
    // Verificar se os parâmetros de query string estão presentes na URL
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.has('name') && urlParams.has('email') && urlParams.has('picture');
    // Retorna true se os parâmetros de query string estiverem presentes, indicando que o usuário está autenticado
    // Retorna false se os parâmetros de query string estiverem ausentes, indicando que o usuário não está autenticado
}

function UpdateData(name,email,pictureUrl){
    document.querySelector('.item-description').innerHTML =   name
    avatarElement.src = pictureUrl;
}

// Obter o valor do parâmetro 'picture' da URL
var pictureUrl = getParameterByName('picture');

// Selecionar o elemento com o id 'user_avatar'
var avatarElement = document.getElementById('user_avatar');

// Definir o atributo src do elemento <img> com a URL da imagem
avatarElement.src = pictureUrl;

// Obter os valores dos parâmetros de query string
var name = getParameterByName('name');
var email = getParameterByName('email');

UpdateData(name,email,pictureUrl)

var newUrl = window.location.pathname;
window.history.pushState({}, '', newUrl);