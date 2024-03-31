
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

window.onload = function () {
    // Recuperar o token JWT do localStorage
    var jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
        // Decodificar o token JWT e fazer o que for necessário com as informações
        var decodedToken = parseJwt(jwtToken);
        console.log(decodedToken);
        // Exemplo de como acessar as informações do token
        var name = decodedToken.given_name;
        var email = decodedToken.email;
        var picture = decodedToken.picture;
        // Faça o que for necessário com as informações

        // Recuperar a URL completa da sessionStorage
        var url = sessionStorage.getItem('url');
        if (url) {
            // Extrair as informações da query string da URL
            var pictureParam = getParameterByName('picture', url);
            console.log("Picture parameter from URL: " + pictureParam);
            // Faça o que for necessário com as informações da query string
        } else {
            console.error("URL não encontrada na sessionStorage.");
            // Lidar com o erro de forma apropriada
        }
    } else {
        console.error("Token JWT não encontrado no localStorage.");
        // Lidar com o erro de forma apropriada
    }
}




const infos = document.querySelector('.item-description').innerHTML =   name



// Obter os valores dos parâmetros de query string
var name = getParameterByName('name');
var email = getParameterByName('email');
var picture = getParameterByName('picture');

// Usar os valores obtidos conforme necessário

console.log("Email: " + email);
console.log("Foto do Perfil: " + picture);