document.getElementById('form').addEventListener('submit', async function(e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    const description = document.querySelector("input#description").value;
    const amount = document.querySelector("input#amount").value;
    const date = document.querySelector("input#date").value;

    const data = {
        description,
        amount,
        date
    };

    try {
        const response = await fetch('http://localhost:3000/add-to-excel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Dados adicionados com sucesso à planilha!');
        } else {
            alert('Erro ao adicionar dados à planilha.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao conectar ao servidor.');
    }
});