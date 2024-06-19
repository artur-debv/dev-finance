const transactions = JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];

const monthlyExpenses = {}; // Objeto para armazenar os gastos por mês

transactions.forEach((transaction) => {
  const date = new Date(transaction.date);
  const month = date.getMonth(); // Retorna um valor entre 0 (Janeiro) e 11 (Dezembro)

  if (!monthlyExpenses[month]) {
    monthlyExpenses[month] = 0;
  }

  monthlyExpenses[month] += transaction.amount;
});

let maxMonth = 0;
let maxExpense = monthlyExpenses[0];

for (const month in monthlyExpenses) {
  if (monthlyExpenses[month] > maxExpense) {
    maxExpense = monthlyExpenses[month];
    maxMonth = parseInt(month); // Converte para número inteiro
  }
}

// Agora você tem o mês com maior gasto (maxMonth) e o valor total (maxExpense)
console.log("Mês com maior gasto:", maxMonth + 1); // Adicionamos 1 para exibir o mês correto (1 a 12)
console.log("Valor total:", maxExpense);