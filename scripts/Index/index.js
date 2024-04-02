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

 // Selecionar elementos do DOM
 const menuBar = document.getElementById('menu-bar');
 const menuIcon = document.getElementById('menu-icon');
 const sidebar = document.getElementById('sidebar');

 // Adicionar evento de clique ao menu bar para abrir ou fechar o sidebar
 menuBar.addEventListener('click', function() {
     sidebar.classList.toggle('open-sidebar');
 });

 // Adicionar evento de clique ao botão do menu para mostrar o sidebar em telas menores que 900px
 const openBtn = document.getElementById('open_btn');
 openBtn.addEventListener('click', function() {
     if (window.innerWidth <= 900 && sidebar.classList.contains('hide-sidebar')) {
         sidebar.classList.remove('hide-sidebar');
     }
 });

 // Adicionar evento de redimensionamento da janela para esconder o sidebar em telas menores que 900px
 window.addEventListener('resize', function() {
     if (window.innerWidth <= 900) {
         sidebar.classList.add('hide-sidebar');
     }
 });

 // Verificar a largura da janela ao carregar a página
 window.addEventListener('load', function() {
     if (window.innerWidth <= 900) {
         sidebar.classList.add('hide-sidebar');
     }
 });