document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

const { OAuth2Client } = require('google-auth-library');

// Crie uma instância do cliente OAuth2 com o seu client ID
const client = new OAuth2Client({ clientId: '939125828914-u6tbs2k30r4tn6fr17k0erjb6j39l69d.apps.googleusercontent.com' });

// Função para desconectar a conta do Google
async function signOut() {
    try {
        await client.revokeToken(currentUser.getAuthResponse().access_token);
        console.log('User signed out.');
        // Faça outras ações após o logout, como redirecionar para a página de login
    } catch (error) {
        console.error('Error signing out:', error);
    }
}

// Chame a função de logout quando necessário
signOut();
