
 const transactionDescription = transaction.querySelector('td:nth-child(1)')
 const transactionValue = transaction.querySelector('td:nth-child(2)')
 const transactionDate = transaction.querySelector('td:nth-child(3)')


 const transaction = {
   transactionDescription: descricao,
   transactionValue: valor,
   transactionDate: data
 };

 // Obtendo o array de transações armazenado no localStorage
 const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
 
 // Adicionando a nova transação ao array
 transactions.push(transaction);

 // Salvando o array atualizado de transações no localStorage
 localStorage.setItem('transactions', JSON.stringify(transactions));