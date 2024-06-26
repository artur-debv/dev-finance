const handleSubmit = (event) => {
    event.preventDefault();

    const description = document.querySelector("input#description").value;
    const amount = document.querySelector("input#amount").value;
    const date = document.querySelector("input#date").value;

    fetch("http://localhost:3000/api/form/jxtYmjVnUoWL7zCNeE7XjQ", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ description, amount, date }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};

document.querySelector("form").addEventListener("submit", handleSubmit);