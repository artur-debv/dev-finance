document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      // Faça outras ações após o logout, como redirecionar para a página de login
    }).catch(function (error) {
      console.error('Error signing out:', error);
    });
}