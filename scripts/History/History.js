const TopTransactions = {
  getAllTransactions() {
    return JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];
  },

  getMonthWithHighestExpenses() {
    const allTransactions = this.getAllTransactions();
    const monthlyExpenses = {};

    // Calcular os gastos totais por mês
    allTransactions.forEach(transaction => {
      const date = new Date(transaction.date);

      // Verifica se a data é válida antes de prosseguir
      if (!isValidDate(date)) {
        console.warn(`Ignorando transação inválida: ${transaction.description}`);
        return; // Pula esta transação e continua para a próxima
      }

      const monthKey = `${date.getMonth() + 1}/${date.getFullYear()}`;

      if (!monthlyExpenses[monthKey]) {
        monthlyExpenses[monthKey] = 0;
      }

      monthlyExpenses[monthKey] += transaction.amount;
    });

    // Encontrar o mês com o maior total de gastos
    let highestMonth = null;
    let highestExpense = -Infinity;

    Object.entries(monthlyExpenses).forEach(([monthKey, totalExpense]) => {
      if (totalExpense > highestExpense) {
        highestExpense = totalExpense;
        highestMonth = monthKey;
      }
    });

    return highestMonth;
  },

  renderMonthWithHighestExpenses() {
    const highestMonth = this.getMonthWithHighestExpenses();

    // Exibir o mês com maior gasto na interface
    const monthDisplay = document.querySelector("#highestMonthDisplay");
    if (monthDisplay) {
      monthDisplay.textContent = highestMonth || "Nenhum mês encontrado";
    }
  }
};

function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

document.addEventListener("DOMContentLoaded", function() {
  TopTransactions.renderMonthWithHighestExpenses();
});
