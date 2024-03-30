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



const infos = document.querySelector('.item-description').innerHTML =   name

// Obter o valor do parâmetro 'picture' da URL
var pictureUrl = getParameterByName('picture');

// Criar um novo elemento <img>
var imgElement = document.createElement('img');

// Definir o atributo src do elemento <img> com a URL da imagem
imgElement.src = pictureUrl;

// Adicionar o elemento <img> ao DOM, por exemplo, ao body do documento
document.body.appendChild(imgElement);



// Obter os valores dos parâmetros de query string
var name = getParameterByName('name');
var email = getParameterByName('email');
var picture = getParameterByName('picture');

// Usar os valores obtidos conforme necessário

console.log("Email: " + email);
console.log("Foto do Perfil: " + picture);