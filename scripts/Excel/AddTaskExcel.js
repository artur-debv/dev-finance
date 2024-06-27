const ExcelJS = require('exceljs');

const workbook = new ExcelJS.Workbook();

const worksheet = workbook.addWorksheet('Minha Planilha');

// Adiciona cabeçalhos à planilha
worksheet.columns = [
    { header: 'ID', key: 'id', width: 10 },
    { header: 'Nome', key: 'nome', width: 30 },
    { header: 'Idade', key: 'idade', width: 10 }
];

// Adiciona algumas linhas de dados
worksheet.addRow({ id: 1, nome: 'João', idade: 25 });
worksheet.addRow({ id: 2, nome: 'Maria', idade: 28 });
worksheet.addRow({ id: 3, nome: 'Pedro', idade: 31 });

// Salva o workbook em um arquivo
workbook.xlsx.writeFile('minha_planilha.xlsx')
    .then(() => {
        console.log('Planilha criada com sucesso!');
    })
    .catch((err) => {
        console.error('Erro ao criar a planilha:', err);
    });


