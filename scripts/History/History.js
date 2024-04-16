
const transactionsContainer = document.querySelector("#data-table tbody");

 // Recuperando as transações do localStorage
 const transactions = JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];

 // Objeto para armazenar o total gasto em cada mêsd
 const monthlyExpenses = {};

 // Iterar sobre as transações
 transactions.forEach(transaction => {
     const { amount, date } = transaction;
     const [day, month, year] = date.split('/'); // Ignorar o dia, se não for necessário

     // Calcular o total gasto para cada mês
     const monthYear = `${month}/${year}`;
     monthlyExpenses[monthYear] = (monthlyExpenses[monthYear] || 0) + parseFloat(amount);
 });

 // Transformar o objeto monthlyExpenses em um array de pares (mês/ano, total gasto)
 const monthlyExpensesArray = Object.entries(monthlyExpenses);

 // Ordenar o array por total gasto em ordem decrescente
 monthlyExpensesArray.sort((a, b) => b[1] - a[1]);



 // Adiciona transações com os maiores gastos à lista de transações
 monthlyExpensesArray.forEach((month, index) => {
   const tr = document.createElement("tr"); // Cria um novo elemento 'tr' (linha da tabela)
  
   tr.dataset.index = index; // Define o atributo 'data-index' da linha da tabela com o índice da transação

   transactionsContainer.appendChild(tr)
 });

 

 