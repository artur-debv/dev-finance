fetch("https://api.sheetmonkey.io/form/jxtYmjVnUoWL7zCNeE7XjQ", {
    method: "POST",
}).then(() => {
    const successMessage = document.createElement("div");
    successMessage.textContent = "Tarefas adicionadas com sucesso!";
    successMessage.style.color = "green"; 
    document.body.appendChild(successMessage);
});