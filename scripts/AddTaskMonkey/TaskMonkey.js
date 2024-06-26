const button = document.querySelector(".button_submit");

const handleSubmit = (event) => {
    event.preventDefault();

    const description = document.querySelector("input#description").value;
    const amount = document.querySelector("input#amount").value;
    const date = document.querySelector("input#date").value;

    fetch("https://api.sheetmonkey.io/form/jxtYmjVnUoWL7zCNeE7XjQ", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ description, amount, date }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Aqui você pode adicionar qualquer lógica adicional de sucesso, como limpar o formulário ou exibir uma mensagem ao usuário
    })
    .catch((error) => {
        console.error('Error:', error);
        // Aqui você pode adicionar qualquer lógica de erro, como exibir uma mensagem ao usuário
    });
};

document.querySelector("form").addEventListener("submit", handleSubmit);