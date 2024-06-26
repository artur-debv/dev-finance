fetch("https://api.sheetmonkey.io/form/jxtYmjVnUoWL7zCNeE7XjQ")
.then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
.catch((error) => {
    console.log(error)
})
})