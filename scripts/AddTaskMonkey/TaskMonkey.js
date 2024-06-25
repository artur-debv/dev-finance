
const button = document.querySelector(".button_submit");


const HandleSubmit = (event) => {
    event.preventDefault();

    const description = document.querySelector("input#description").value;
    const amount = document.querySelector("input#amount").value;
    const date = document.querySelector("input#date").value;

    fetch("https://api.sheetmonkey.io/form/jxtYmjVnUoWL7zCNeE7XjQ", {
        method: "post",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "86400",
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            "Description": description,
            "Amount": amount,
            "Date": date
        })

    })
}

document.querySelector("form").addEventListener("submit", HandleSubmit);



