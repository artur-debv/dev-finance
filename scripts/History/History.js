const TopTransactions = {
  getAllTransactions() {
    return JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];
  },

  getTopTransaction() {
    const allTransactions = this.getAllTransactions();
    let topTransaction = allTransactions[0]; // Inicia com a primeira transação
    for (let i = 1; i < allTransactions.length; i++) {
      // Compara o valor absoluto da transação atual com a transação com o maior valor absoluto encontrado até agora
      if (Math.abs(allTransactions[i].amount) > Math.abs(topTransaction.amount)) {
        topTransaction = allTransactions[i]; // Atualiza a transação com o maior valor absoluto
      }
    }
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