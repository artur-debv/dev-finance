fetch("https://api.sheetmonkey.io/form/jxtYmjVnUoWL7zCNeE7XjQ", {
    method: "POST",
}).then(() => {
    const successMessage = document.createElement("h1");
    successMessage.textContent = "Tarefas adicionadas com sucesso!";
    successMessage.style.color = "green"; // Estilize conforme necessário
    document.body.appendChild(successMessage);
});