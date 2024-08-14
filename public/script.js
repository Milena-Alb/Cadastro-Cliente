document.getElementById("buttonAdicionar").addEventListener("click", function() {
    document.getElementById("divCadastro").style.display = "block";
    document.getElementById("buttonCadastrar").style.display = "block";
    document.getElementById("buttonResetar").style.display = "block";
    document.getElementById("buttonCancelar").style.display = "block";
    this.style.display = "none";
});
document.getElementById("buttonCadastrar").addEventListener("click", function() {
    console.log('Botão Cadastrar clicado'); 
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
        nome, dataNascimento, genero, telefone, email, rua, numero, bairro, cidade, estado, cep
    };

    console.log('Preparando para enviar dados ao servidor');

    fetch('/salvarCliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosCliente),
    })
    .then(response => {
        console.log('Resposta do servidor:', response);
        if (response.ok) {
            return response.text(); // Pode ser útil para ver o corpo da resposta
        } else {
            console.error('Erro ao cadastrar cliente. Status:', response.status);
            return response.text(); // Para ver detalhes do erro
        }
    })
    .then(text => {
        console.log('Corpo da resposta:', text);
        // Código para atualizar a UI após uma resposta bem-sucedida
        document.getElementById("informacoesCliente").innerHTML = `
            <h2 id="titulo2">Informações do Cliente:</h2>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Data de Nascimento:</strong> ${dataNascimento}</p>
            <p><strong>Gênero:</strong> ${genero}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Rua:</strong> ${rua}</p>
            <p><strong>Número:</strong> ${numero}</p>
            <p><strong>Bairro:</strong> ${bairro}</p>
            <p><strong>Cidade:</strong> ${cidade}</p>
            <p><strong>Estado:</strong> ${estado}</p>
            <p><strong>CEP:</strong> ${cep}</p>
        `;
        document.getElementById("divCadastro").style.display = "none";
        document.getElementById("buttonCadastrar").style.display = "none";
        document.getElementById("buttonResetar").style.display = "none";
        document.getElementById("informacoesCliente").style.display = "block";
        document.getElementById("buttonAtualizar").style.display = "inline-block";
        document.getElementById("buttonCancelar").style.display = "inline-block";
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
    });

});
document.getElementById("buttonAtualizar").addEventListener("click", function() {
    document.getElementById("informacoesCliente").style.display = "none";
    document.getElementById("buttonAtualizar").style.display = "none";
    document.getElementById("buttonCancelar").style.display = "block";
    document.getElementById("divCadastro").style.display = "block";
    document.getElementById("titulo2").style.display = "block";
    document.getElementById("buttonCadastrar").style.display = "block";
    document.getElementById("buttonResetar").style.display = "block";
});
document.getElementById("buttonCancelar").addEventListener("click", function() {
    document.getElementById("informacoesCliente").style.display = "none";
    document.getElementById("buttonAtualizar").style.display = "none";
    document.getElementById("buttonCancelar").style.display = "none";
    document.getElementById("divCadastro").style.display = "none";
    document.getElementById("buttonCadastrar").style.display = "none";
    document.getElementById("buttonResetar").style.display = "none";
    document.getElementById("buttonAdicionar").style.display = "block";
});

