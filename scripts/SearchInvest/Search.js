function search() {
    const buttonSearch = document.getElementById('button_search');

    buttonSearch.addEventListener('click', function () {
        const selectedInvestmentType = document.getElementById('tipoInvestimento').value.toLowerCase();
        const transactions = document.querySelectorAll('.tbodys tr');

        transactions.forEach(function (transaction) {
            const transactionInvestmentType = transaction.querySelector('td:nth-child(1)').textContent.toLowerCase();
            // Você pode adicionar mais filtros, se necessário

            const matchesInvestmentType = selectedInvestmentType === "" || transactionInvestmentType.includes(selectedInvestmentType);

            if (matchesInvestmentType) {
                transaction.style.display = ''; // Exibe a transação se houver correspondência
            } else {
                transaction.style.display = 'none'; // Oculta a transação se não houver correspondência
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', search);