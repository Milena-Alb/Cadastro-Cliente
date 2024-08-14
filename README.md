# 🚀 Projeto de Cadastro de Clientes

## 📋 Descrição

Este projeto é um sistema de cadastro de clientes que permite adicionar, atualizar e visualizar informações de clientes. O frontend é desenvolvido em HTML, CSS e JavaScript, enquanto o backend é implementado utilizando Express.js. Os dados dos clientes são armazenados em um arquivo JSON.

## ✨ Funcionalidades

- **🆕 Cadastro de Cliente**: Adicione novos clientes ao sistema.
- **✏️ Atualização de Cliente**: Edite as informações de clientes já cadastrados.
- **👁️ Visualização de Cliente**: Exiba as informações de um cliente específico.
- **💾 Persistência de Dados**: As informações dos clientes são armazenadas em um arquivo JSON no servidor.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js com Express.js
- **Armazenamento**: Arquivo JSON

## 📁 Estrutura do Projeto

- **`public/`**: Contém os arquivos estáticos (HTML, CSS, JS).
- **`clientes.json`**: Arquivo onde os dados dos clientes são armazenados.
- **`server.js`**: Arquivo principal do servidor Node.js que gerencia as rotas e a lógica de negócios.

## 🚀 Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. **Instale as dependências:**

    ```bash
    cd nome-do-repositorio
    npm install
    ```

3. **Inicie o servidor:**

    ```bash
    node server.js
    ```

4. **Acesse a aplicação no navegador:**

    [http://localhost:3000](http://localhost:3000)

## 📝 Como Usar

- **Adicionar Cliente:** Clique no botão "Adicionar Cliente", preencha o formulário com as informações do cliente e, em seguida, clique em "Cadastrar".
- **Atualizar Cliente:** Selecione um cliente existente, clique em "Atualizar", edite as informações desejadas e clique em "Salvar".
- **Visualizar Cliente:** Clique no nome de um cliente para visualizar seus detalhes.

## 🔧 Funcionalidades de Backend

- **Endpoint para Salvar um Novo Cliente**
  - **Método:** `POST`
  - **URL:** `/salvarCliente`
  - **Descrição:** Adiciona um novo cliente ao sistema.
  - **Resposta:** 
    ```json
    { "codigo": <codigo_cliente> }
    ```

- **Endpoint para Atualizar um Cliente Existente**
  - **Método:** `PUT`
  - **URL:** `/atualizarCliente/:codigo`
  - **Descrição:** Atualiza as informações de um cliente existente.
  - **Resposta:** 
    ```json
    { "codigo": <codigo_cliente> }
    ```

## 🧩 Estrutura do Backend

- **`server.js`:** Configuração do servidor Express, incluindo rotas e manipulação de arquivos JSON.
- **Função `carregarClientes()`:** Carrega os dados dos clientes do arquivo JSON.
- **Endpoint `/salvarCliente`:** Adiciona um novo cliente e salva no arquivo JSON.
- **Endpoint `/atualizarCliente/:codigo`:** Atualiza as informações de um cliente existente.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tiver sugestões, correções ou melhorias, sinta-se à vontade para abrir um pull request ou reportar issues.

