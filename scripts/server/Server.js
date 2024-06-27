const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/add-to-excel', async (req, res) => {

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');
    worksheet.columns = [
        { header: 'Description', key: 'description', width: 30 },
        { header: 'Amount', key: 'amount', width: 10 },
        { header: 'Date', key: 'date', width: 10 }
    ];
    worksheet.addRow({ description: 'Description', amount: 'Amount', date: 'Date' });
    worksheet.addRow({ description: req.body.description, amount: req.body.amount, date: req.body.date });
    await workbook.xlsx.writeFile('output.xlsx');
  
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});