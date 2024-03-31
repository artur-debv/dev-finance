document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

document.addEventListener("DOMContentLoaded", function() {
    // Seu código que depende da API do Google aqui

    // Exemplo: definir um manipulador de eventos para o botão de logout
    var logoutButton = document.getElementById("logout_btn");
    logoutButton.addEventListener("click", function() {
        signOut();
    });
});