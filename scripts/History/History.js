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

// Obter os meses mais gastos
const topMonths = monthlyExpensesArray.slice(0, 3); // Pegar os 3 primeiros meses mais gastos

// Acessar os elementos de cada mês mais gasto
topMonths.forEach((month) => {
    const dataElement = document.querySelector(".Data"); // Supondo que os elementos HTML tenham classes como "data1", "data2", etc.
    const valorElement = document.querySelector(".Valor"); // Supondo que os elementos HTML tenham classes como "valor1", "valor2", etc.

    dataElement.textContent = month[1]; // Atualiza a data
    valorElement.textContent = month[0]; // Atualiza o valor
});

console.log('Meses mais gastos:', topMonths);