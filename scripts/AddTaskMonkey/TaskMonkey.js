const HandleSubmit = () => {

  event.preventDefault();

  const description = document.querySelector("input#description").value;
  const amount = document.querySelector("input#amount").value;
  const date = document.querySelector("input#date").value;

  fetch('https://api.sheetmonkey.io/form/jxtYmjVnUoWL7zCNeE7XjQ', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({description, amount, date})
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

document.querySelector("form").addEventListener("submit", HandleSubmit)