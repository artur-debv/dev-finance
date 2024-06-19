const History = {
  list() {
    const sortedTransactions = Transaction.all.slice().sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));
    const topTransactionsContainer = document.querySelector("#data-table tbody");

    topTransactionsContainer.innerHTML = ""; // Clear any existing top transactions

    sortedTransactions.forEach((transaction, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = History.innerHTMLTransaction(transaction, index);
      tr.dataset.index = index;
      topTransactionsContainer.appendChild(tr);
    });
  },

  innerHTMLTransaction(transaction, index) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense";
    const amount = Utils.formatCurrency(transaction.amount);
    const html = `
      <td class="description">${transaction.description}</td>
      <td class="${CSSclass}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
          <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" class="remove" alt="Remover Transação">
      </td>
    `;
    return html;
  },
};

// Call the function to list top transactions when the script is loaded
document.addEventListener("DOMContentLoaded", function () {
  History.list();
});