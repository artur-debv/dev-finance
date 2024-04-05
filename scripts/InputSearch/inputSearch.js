document.querySelector('input_search').addEventListener('keyup', function() {
    var searchText = this.value.toLowerCase(); // Obtém o valor digitado e converte para minúsculas para facilitar a comparação
    var transactions = document.querySelectorAll('#tbodyID tr'); // Obtém todas as linhas de transação

    transactions.forEach(function(transaction) {
        var transactionName = transaction.querySelector('.transactionName').textContent.toLowerCase(); // Obtém o nome da transação
        var transactionDescription = transaction.querySelector('.transactionDescription').textContent.toLowerCase(); // Obtém a descrição da transação
        var transactionDate = transaction.querySelector('.transactionDate').textContent.toLowerCase(); // Obtém a data da transação

        // Verifica se o texto da pesquisa está presente em qualquer parte do nome, descrição ou data da transação
        if (transactionName.includes(searchText) || transactionDescription.includes(searchText) || transactionDate.includes(searchText)) {
            transaction.style.display = ''; // Exibe a transação se houver uma correspondência
        } else {
            transaction.style.display = 'none'; // Oculta a transação se não houver correspondência
        }
    });
});