const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/add-to-excel', async (req, res) => {
    const { description, amount, date } = req.body;

    const workbook = new ExcelJS.Workbook();
    const filePath = 'dados.xlsx';

    // Verifica se o arquivo já existe
    if (fs.existsSync(filePath)) {
        await workbook.xlsx.readFile(filePath);
    } else {
        // Adiciona uma nova planilha se o arquivo não existir
        workbook.addWorksheet('Dados');
    }

    const worksheet = workbook.getWorksheet('Dados');

    // Adiciona cabeçalhos se a planilha estiver vazia
    if (worksheet.rowCount === 0) {
        worksheet.columns = [
            { header: 'Descrição', key: 'description', width: 30 },
            { header: 'Valor', key: 'amount', width: 15 },
            { header: 'Data', key: 'date', width: 20 }
        ];
    }

    // Adiciona uma nova linha com os dados
    worksheet.addRow({ description, amount, date });

    // Salva a planilha
    await workbook.xlsx.writeFile(filePath);

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});