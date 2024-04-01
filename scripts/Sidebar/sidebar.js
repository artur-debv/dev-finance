document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

import { loadAuth2, gapi } from 'gapi';

// Carregar a biblioteca de autenticação do Google
loadAuth2().then(() => {
    console.log('Google Auth2 loaded.');
}).catch((error) => {
    console.error('Error loading Google Auth2:', error);
});

// Função para desconectar a conta do Google
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
        console.log('User signed out.');
    }).catch((error) => {
        console.error('Error signing out:', error);
    });
}