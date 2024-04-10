// Recuperando as transações do localStorage
const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

console.log(transactions)