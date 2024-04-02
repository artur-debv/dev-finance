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

if (name  && pictureUrl) {
    // O usuário está autenticado, então atualize os dados na página
    UpdateData(name, email, pictureUrl);

    // Remover os parâmetros de autenticação da URL
    var newUrl = window.location.pathname;
    window.history.pushState({}, '', newUrl);
} else {
    // Redirecionar o usuário para a página de login
    window.location.href = 'https://devfinancesss.netlify.app/form';
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


var newUrl = window.location.pathname;
window.history.pushState({}, '', newUrl);