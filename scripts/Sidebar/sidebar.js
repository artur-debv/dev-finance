document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

function handleLogout() {
    // Cancelar a autenticação com a conta do Google
    google.accounts.id.cancel();

}

// Adicionar um evento de clique ao botão de logout
document.getElementById('logout_btn').addEventListener('click', handleLogout);