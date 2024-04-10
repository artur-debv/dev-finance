// Recuperando as transações do localStorage
const transactions = JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];

// Objeto para armazenar o total gasto em cada mês
const monthlyExpenses = {};



// Iterar sobre as transações
transactions.forEach(transaction => {

    const Date = document.querySelector(".Data").innerHTML = date
    console.log(date)
    const Value = document.querySelector(".Valor").innerHTML = amount
    console.log(Value)
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

console.log('Meses mais gastos:', topMonths);