
const buttons = document.getElementById('button_search')



buttons.addEventListener('click',function(){
    const inputValue = document.getElementById('input_Search').value.toLowerCase()
    const transactions = document.querySelectorAll('tbodys tr');
    console.log(transactions)

    transactions.forEach(function(transaction) {
        const transactionName = transaction.querySelector('.transactionName').textContent.toLowerCase();
        const transactionDsescription = transaction.querySelector('.transactionDescription').textContent.toLowerCase();
        const transactionDate = transaction.querySelector('.transactionDate').textContent.toLowerCase();

        if (transactionName.includes(inputValue) || transactionDescription.includes(inputValue) || transactionDate.includes(inputValue)) {
            transaction.style.display = ''; // Exibe a transação se houver uma correspondência
        } else {
            transaction.style.display = 'none'; // Oculta a transação se não houver correspondência
        }
    });
})

