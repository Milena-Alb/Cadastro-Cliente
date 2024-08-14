const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use(express.json());
const arquivoClientes = path.join(__dirname, 'clientes.json');
app.post('/salvarCliente', (req, res) => {
    const novoCliente = req.body;
    fs.readFile(arquivoClientes, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return res.status(500).send('Erro ao processar dados');
        }
        let clientes = [];
        if (data) {
            clientes = JSON.parse(data);
        }
        clientes.push(novoCliente);
        fs.writeFile(arquivoClientes, JSON.stringify(clientes, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Erro ao salvar os dados:', err);
                return res.status(500).send('Erro ao salvar os dados');
            }
            console.log('Cliente cadastrado com sucesso!');
            res.status(200).send('Cliente cadastrado com sucesso!');
        });
    });
});
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
