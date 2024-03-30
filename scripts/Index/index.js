// Função para obter parâmetros de query string da URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "g");
    var results = [];
    var match;
    while (match = regex.exec(url)) {
        var value = decodeURIComponent(match[2].replace(/\+/g, " "));
        // Tratar especificamente o parâmetro 'picture'
        if (name === 'picture') {
            // Decodificar o valor da URL da imagem
            value = decodeURIComponent(value);
        }
        results.push(value);
    }
    return results;
}




const infos = document.querySelector('.item-description').innerHTML =   name
const avatar = document.getElementById('user_avatar').src = picture


// Obter os valores dos parâmetros de query string
var name = getParameterByName('name');
var email = getParameterByName('email');
var picture = getParameterByName('picture');

// Usar os valores obtidos conforme necessário

console.log("Email: " + email);
console.log("Foto do Perfil: " + picture);