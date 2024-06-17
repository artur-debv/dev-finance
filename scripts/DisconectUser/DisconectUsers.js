
      function disconnectUser() {
        // Verifica se a biblioteca está carregada
        if (typeof google.accounts !== 'undefined' && google.accounts.id) {
            try {
                
                 google.accounts.id.revoke();

                // Redireciona para a página desejada após a desconexão (opcional)
               window.location.href = "https://devfinancesss.netlify.app/form";
            } catch (error) {
                console.error('Erro ao revogar o token de autenticação:', error);
                // Trate o erro aqui, se necessário
            }
        } else {
            console.error('Biblioteca google.accounts não carregada corretamente.');
        }

    }