const TopTransactions = {
  getAllTransactions() {
    return JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];
  },

  getTopTransaction() {
    const allTransactions = this.getAllTransactions();
    const topTransaction = allTransactions.reduce((prev, current) => {
      return Math.abs(current.amount) > Math.abs(prev.amount) ? current : prev;
    });
    return topTransaction;
  },

  renderTopTransaction() {
    const transactionsContainer = document.querySelector("#data-table tbody");
    const topTransaction = this.getTopTransaction();

    transactionsContainer.innerHTML = ""; // Limpa qualquer linha existente na tabela

    const tr = document.createElement("tr");
    const amountClass = topTransaction.amount > 0 ? "income" : "expense";
    const amount = Utils.formatCurrency(topTransaction.amount);

    tr.innerHTML = `
      <td class="description">${topTransaction.description}</td>
      <td class="${amountClass}">${amount}</td>
      <td class="date">${topTransaction.date}</td>
    `;

    transactionsContainer.appendChild(tr);
  }
};

document.addEventListener("DOMContentLoaded", function() {
  TopTransactions.renderTopTransaction();
});