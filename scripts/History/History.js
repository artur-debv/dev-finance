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
        monthlyExpenses[monthKey] = {
          totalExpense: 0,
          highestExpenseDate: null
        };
      }

      monthlyExpenses[monthKey].totalExpense += transaction.amount;

      // Verificar se este é o maior gasto registrado para este mês
      if (
        monthlyExpenses[monthKey].highestExpenseDate === null ||
        transaction.amount > monthlyExpenses[monthKey].totalExpense
      ) {
        monthlyExpenses[monthKey].highestExpenseDate = date;
      }
    });

    // Encontrar o mês com o maior total de gastos
    let highestMonth = null;
    let highestExpense = -Infinity;

    Object.entries(monthlyExpenses).forEach(([monthKey, data]) => {
      if (data.totalExpense > highestExpense) {
        highestExpense = data.totalExpense;
        highestMonth = data.highestExpenseDate; // Armazena o objeto Date com a data específica
      }
    });

    document.querySelector(".date").innerHTML = highestMonth;

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

document.addEventListener("DOMContentLoaded", function () {
  TopTransactions.renderMonthWithHighestExpenses();
});