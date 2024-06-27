document.getElementById('form').addEventListener('submit', async function(e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    const ExcelJS = require('exceljs');

    const description = document.querySelector("input#description").value;
    const amount = document.querySelector("input#amount").value;
    const date = document.querySelector("input#date").value;

    const workbook = new ExcelJS.Workbook();

    const worksheet = workbook.addWorksheet('Despesas');

    worksheet.columns = [
        { header: 'Descricão', key: 'description', width: 50 },
        { header: 'Valor', key: 'amount', width: 10 },
        { header: 'Data', key: 'date', width: 10 },
    ];

    worksheet.addRow({ description, amount, date });
   
});