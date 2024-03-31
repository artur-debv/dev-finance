document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

  // Função de inicialização após a biblioteca gapi ser carregada
  function onGapiLoad() {
    // Inicializar a biblioteca auth2
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: '939125828914-u6tbs2k30r4tn6fr17k0erjb6j39l69d.apps.googleusercontent.com'
        });
    });
}

// Função para desconectar a conta do Google
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

signOut()
onGapiLoad()