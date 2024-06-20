const Description = document.querySelector("input#description")
const Amount = document.querySelector("input#amount")
const Date = document.querySelector("input#date")



const Db = firebase.database()

console.log(Db)

const transactionsRef = Db.ref('dev.finances/transactions');


 


