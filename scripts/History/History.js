const TopTransactions = {
  getAllTransactions() {
    return JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];
  },

  getTopTransactions(limit = 5) {
    const allTransactions = this.getAllTransactions();
    return allTransactions.sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount)).slice(0, limit);
  },

  renderTopTransactions() {
    const transactionsContainer = document.querySelector("#data-table tbody");
    const topTransactions = this.getTopTransactions();

    transactionsContainer.innerHTML = ""; // Clear any existing rows

    topTransactions.forEach(transaction => {
      const tr = document.createElement("tr");
      const amountClass = transaction.amount > 0 ? "income" : "expense";
      const amount = transaction.amount > 0 ? `+ ${Utils.formatCurrency(transaction.amount)}` : `- ${Utils.formatCurrency(transaction.amount)}`;
      
      tr.innerHTML = `
        <td class="description">${transaction.description}</td>
        <td class="${amountClass}">${amount}</td>
        <td class="date">${transaction.date}</td>
      `;

      transactionsContainer.appendChild(tr);
    });
  }
};

document.addEventListener("DOMContentLoaded", function() {
  TopTransactions.renderTopTransactions();
});