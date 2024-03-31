
function parseJwt(token) {
    try {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error("Erro ao decodificar o token JWT:", error);
        return null;
    }
}


window.onload = function () {
    // Recuperar o token JWT da sessionStorage
    var jwtToken = sessionStorage.getItem('jwtToken');
    if (jwtToken) {
        // Decodificar o token JWT e fazer o que for necessário com as informações
        var decodedToken = parseJwt(jwtToken);
        console.log(decodedToken);
        // Exemplo de como acessar as informações do token
        var name = decodedToken.given_name;
        var email = decodedToken.email;
        var picture = decodedToken.picture;
        // Faça o que for necessário com as informações
    } else {
        console.error("Token JWT não encontrado na sessionStorage.");
        // Lidar com o erro de forma apropriada
    }
}

// Obter o valor do parâmetro 'picture' da URL
var pictureUrl = getParameterByName('picture');

// Criar um novo elemento <img>
var imgElement = document.createElement('img');

// Definir o atributo src do elemento <img> com a URL da imagem
imgElement.src = pictureUrl;

// Selecionar o elemento com o id 'user' no sidebar
var userElement = document.getElementById('user');



// Adicionar o elemento <img> como filho do elemento 'user' no sidebar
userElement.appendChild(imgElement);


const infos = document.querySelector('.item-description').innerHTML =   name



// Obter os valores dos parâmetros de query string
var name = getParameterByName('name');
var email = getParameterByName('email');
var picture = getParameterByName('picture');

// Usar os valores obtidos conforme necessário

console.log("Email: " + email);
console.log("Foto do Perfil: " + picture);