
const button = document.querySelector(".button_submit");

button.addEventListener("click", (event) => {
    fetch("https://api.sheetmonkey.io/form/jxtYmjVnUoWL7zCNeE7XjQ", {
        method: "POST",
    })
})

