document.addEventListener("DOMContentLoaded", function() {
    let clientes = {};
    let clienteAtual = null;
    function limparCampos() {
        document.getElementById("inputNome").value = "";
        document.getElementById("inputData").value = "";
        document.getElementById("genero").value = "";
        document.getElementById("telefone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("rua").value = "";
        document.getElementById("numero").value = "";
        document.getElementById("bairro").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("estado").value = "";
        document.getElementById("cep").value = "";
    }
    function exibirInformacoesCliente(codigo) {
        const cliente = clientes[codigo];
        if (cliente) {
            document.getElementById("informacoesCliente").innerHTML = `
                <h2 id="titulo2">Informações do Cliente:</h2>
                <p><strong>Nome:</strong> ${cliente.nome}</p>
                <p><strong>Data de Nascimento:</strong> ${cliente.dataNascimento}</p>
                <p><strong>Gênero:</strong> ${cliente.genero}</p>
                <p><strong>Telefone:</strong> ${cliente.telefone}</p>
                <p><strong>Email:</strong> ${cliente.email}</p>
                <p><strong>Rua:</strong> ${cliente.rua}</p>
                <p><strong>Número:</strong> ${cliente.numero}</p>
                <p><strong>Bairro:</strong> ${cliente.bairro}</p>
                <p><strong>Cidade:</strong> ${cliente.cidade}</p>
                <p><strong>Estado:</strong> ${cliente.estado}</p>
                <p><strong>CEP:</strong> ${cliente.cep}</p>`;
            document.getElementById("buttonAtualizar").style.display = "inline-block";
            document.getElementById("buttonCancelar").style.display = "inline-block";
            document.getElementById("buttonSalvar").style.display = "none";
            document.getElementById("informacoesCliente").style.display = "block";
            document.getElementById("buttonAdicionar").style.display = "none";
            document.getElementById("clientesList").style.display = "none";
        }
    }
    function resetarFormulario() {
        clienteAtual = null;
        document.getElementById("buttonSalvar").style.display = "none";
        document.getElementById("divCadastro").style.display = "none";
        document.getElementById("buttonCadastrar").style.display = "none";
        document.getElementById("buttonResetar").style.display = "none";
        document.getElementById("buttonAtualizar").style.display = "none";
        document.getElementById("buttonCancelar").style.display = "none";
        document.getElementById("buttonAdicionar").style.display = "block";
        document.getElementById("clientesList").style.display = "block";
        document.getElementById("informacoesCliente").style.display = "none";
    }
    document.getElementById("buttonAdicionar").addEventListener("click", function() {
        document.getElementById("buttonSalvar").style.display = "none";
        document.getElementById("divCadastro").style.display = "block";
        document.getElementById("buttonCadastrar").style.display = "block";
        document.getElementById("buttonResetar").style.display = "block";
        document.getElementById("buttonCancelar").style.display = "block";
        document.getElementById("clientesList").style.display = "none";
        this.style.display = "none";
        clienteAtual = null;
        limparCampos();
    });
    document.getElementById("buttonCadastrar").addEventListener("click", function() {obterInformacoes("cadastro");});
    document.getElementById("buttonSalvar").addEventListener("click", function() {obterInformacoes("atualizacao");});
    document.getElementById("buttonResetar").addEventListener("click", function() {limparCampos();});
    document.getElementById("buttonAtualizar").addEventListener("click", function() {
        if (clienteAtual !== null) {
            document.getElementById("informacoesCliente").style.display = "none";
            document.getElementById("buttonAtualizar").style.display = "none";
            document.getElementById("buttonCancelar").style.display = "block";
            document.getElementById("clientesList").style.display = "none";
            document.getElementById("divCadastro").style.display = "block";
            document.getElementById("titulo2").style.display = "block";
            document.getElementById("buttonCadastrar").style.display = "none";
            document.getElementById("buttonSalvar").style.display = "block";
            document.getElementById("buttonResetar").style.display = "block";
            const cliente = clientes[clienteAtual];
            if (cliente) {
                document.getElementById("inputNome").value = cliente.nome;
                document.getElementById("inputData").value = cliente.dataNascimento;
                document.getElementById("genero").value = cliente.genero;
                document.getElementById("telefone").value = cliente.telefone;
                document.getElementById("email").value = cliente.email;
                document.getElementById("rua").value = cliente.rua;
                document.getElementById("numero").value = cliente.numero;
                document.getElementById("bairro").value = cliente.bairro;
                document.getElementById("cidade").value = cliente.cidade;
                document.getElementById("estado").value = cliente.estado;
                document.getElementById("cep").value = cliente.cep;
            }
        }
    });
    document.getElementById("buttonCancelar").addEventListener("click", function() {
        resetarFormulario();
    });
    function obterInformacoes(tipo) {
        const nome = document.getElementById("inputNome").value;
        const dataNascimento = document.getElementById("inputData").value;
        const genero = document.getElementById("genero").value;
        const telefone = document.getElementById("telefone").value;
        const email = document.getElementById("email").value;
        const rua = document.getElementById("rua").value;
        const numero = document.getElementById("numero").value;
        const bairro = document.getElementById("bairro").value;
        const cidade = document.getElementById("cidade").value;
        const estado = document.getElementById("estado").value;
        const cep = document.getElementById("cep").value;
        const dadosCliente = {
            nome, dataNascimento, genero, telefone, email, rua, numero, bairro, cidade, estado, cep};
        let url = '/salvarCliente';
        let method = 'POST';
        if (tipo === "atualizacao" && clienteAtual !== null) {
            url = `/atualizarCliente/${clienteAtual}`;
            method = 'PUT';
        }
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosCliente),
        })
        .then(response => response.json())
        .then(data => {
            if (data.codigo) {
                if (tipo === "cadastro") {
                    clientes[data.codigo] = dadosCliente;
                    const clienteButton = document.createElement('button');
                    clienteButton.innerText = `Cliente ${data.codigo}`;
                    clienteButton.id = `Cliente-${data.codigo}`;
                    clienteButton.addEventListener('click', function() {
                        clienteAtual = data.codigo;
                        exibirInformacoesCliente(data.codigo);
                    });
                    document.getElementById('botoesClientes').appendChild(clienteButton);
                } else if (tipo === "atualizacao") {
                    clientes[clienteAtual] = dadosCliente;
                    document.getElementById(`Cliente-${clienteAtual}`).innerText = `Cliente ${clienteAtual}`;
                }
                exibirInformacoesCliente(clienteAtual || data.codigo);
                resetarFormulario();
            } else {
                console.error('Erro ao processar cliente.');
            }
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
    }
});
