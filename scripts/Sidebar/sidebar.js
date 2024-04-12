document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        // Redirecione para a página de login ou outra página após o logout
        window.location.href = "https://devfinancesss.netlify.app/form";
    });
}