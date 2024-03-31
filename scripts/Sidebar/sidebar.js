document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        // Redirecionar para a página de login ou fazer outra ação após o logout
    });
}

document.getElementById("logout_btn").addEventListener("click", signOut);