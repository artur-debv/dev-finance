function search() {
    const buttonSearch = document.getElementById('button_search');

    buttonSearch.addEventListener('click', function () {
        const selectedInvestmentType = document.getElementById('select_investmentType').value.toLowerCase();
        const transactions = document.querySelectorAll('.tbodys tr');

        transactions.forEach(function (transaction) {
            const transactionValue = transaction.querySelector('td:nth-child(1)').textContent.toLowerCase();
            const transactionDate = transaction.querySelector('td:nth-child(2)').textContent.toLowerCase();
            const transactionInvestmentType = transaction.querySelector('td:nth-child(3)').textContent.toLowerCase(); // Supondo que o tipo de investimento está na terceira célula

            const matchesSearchText = transactionValue.includes(searchText) || transactionDate.includes(searchText);
            const matchesInvestmentType = selectedInvestmentType === "" || transactionInvestmentType.includes(selectedInvestmentType);

            if (matchesSearchText && matchesInvestmentType) {
                transaction.style.display = ''; // Exibe a transação se houver correspondência
            } else {
                transaction.style.display = 'none'; // Oculta a transação se não houver correspondência
            }
        });
    });
}