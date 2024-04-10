// Recuperando as transações do localStorage
const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Objeto para armazenar o total gasto em cada mês
const monthlyExpenses = {};

// Percorrendo as transações
transactions.forEach(transaction => {
    // Extraindo o mês e o ano da data da transação
    const [date, month, year] = transaction.date.split('/'); // Aqui estamos dividindo a data em dia, mês e ano
    const monthYear = `${month}/${year}`;

    // Se o mês já estiver no objeto monthlyExpenses, adiciona o valor da transação à soma existente; caso contrário, cria uma nova entrada com o valor da transação
    if (monthlyExpenses[monthYear]) {
        monthlyExpenses[monthYear] += transaction.amount;
    } else {
        monthlyExpenses[monthYear] = transaction.amount;
    }
});

// Transformando o objeto monthlyExpenses em um array de pares (mês/ano, total gasto)
const monthlyExpensesArray = Object.entries(monthlyExpenses);

// Ordenando o array de acordo com o total gasto em ordem decrescente
monthlyExpensesArray.sort((a, b) => b[1] - a[1]);

// Obtendo os meses mais gastos
const topMonths = monthlyExpensesArray.slice(0, 3); // Pega os 3 primeiros meses mais gastos

console.log('Meses mais gastos:', topMonths);
