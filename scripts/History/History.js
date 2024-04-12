// Recuperando as transações do localStorage
const transactions = JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];

// Objeto para armazenar o total gasto em cada mês
const monthlyExpenses = {};

// Iterar sobre as transações
transactions.forEach(transaction => {
    const { amount, date } = transaction;
    const [day, month, year] = date.split('/'); // Ignorar o dia, se não for necessário

    // Calcular o total gasto para cada mês
    const monthYear = `${day}/${month}/${year}`;
    monthlyExpenses[monthYear] = (monthlyExpenses[monthYear] || 0) + parseFloat(amount);
});

// Transformar o objeto monthlyExpenses em um array de pares (mês/ano, total gasto)
const monthlyExpensesArray = Object.entries(monthlyExpenses);

// Ordenar o array por total gasto em ordem decrescente
monthlyExpensesArray.sort((a, b) => b[1] - a[1]);

// Obter os elementos HTML onde você deseja exibir os meses mais gastos
const dataElements = document.querySelectorAll(".Data");
const valorElements = document.querySelectorAll(".Valor");

// Iterar sobre os elementos HTML e atualizar com os valores dos meses mais gastos
monthlyExpensesArray.forEach((month, index) => {
    // Verificar se existem elementos disponíveis para exibir os meses mais gastos
    if (index < dataElements.length && index < valorElements.length) {
        const dataElement = dataElements[index];
        const valorElement = valorElements[index];

        // Atualizar os elementos HTML com os valores do mês mais gasto
        dataElement.textContent = month[1]; // Assumindo que o primeiro elemento do par seja a data
        valorElement.textContent = month[0]; // Assumindo que o segundo elemento do par seja o valor
    }
});
