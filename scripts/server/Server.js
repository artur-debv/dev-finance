const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const fs = require('fs');

const app = express();
const port = 4000;

app.use(bodyParser.json());

// Rota para receber dados e adicionar à planilha Excel
app.post('/add-to-excel', async (req, res) => {
    const { description, amount, date } = req.body;

    try {
        // Carrega ou cria um novo arquivo Excel
        const workbook = new ExcelJS.Workbook();
        const filePath = 'output.xlsx';

        if (fs.existsSync(filePath)) {
            await workbook.xlsx.readFile(filePath);
        } else {
            workbook.creator = 'Your Name';
            workbook.lastModifiedBy = 'Your Name';
            workbook.created = new Date();
            workbook.modified = new Date();
            const sheet = workbook.addWorksheet('Sheet1');
            sheet.columns = [
                { header: 'Description', key: 'description', width: 30 },
                { header: 'Amount', key: 'amount', width: 10 },
                { header: 'Date', key: 'date', width: 10 }
            ];
            await workbook.xlsx.writeFile(filePath);
        }

        const worksheet = workbook.getWorksheet('Sheet1');
        worksheet.addRow({ description, amount, date });
        await workbook.xlsx.writeFile(filePath);

        res.status(200).send('Data added to Excel successfully.');
    } catch (error) {
        console.error('Error adding data to Excel:', error);
        res.status(500).send('Error adding data to Excel.');
    }
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});