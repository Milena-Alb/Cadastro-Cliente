document.getElementById("buttonAdicionar").addEventListener("click", function() {
    document.getElementById("divCadastro").style.display = "block";
    document.getElementById("buttonCadastrar").style.display = "block";
    document.getElementById("buttonResetar").style.display = "block";
    this.style.display = "none";
});

document.getElementById("buttonCadastrar").addEventListener("click", function() {
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

    const informacoes = `
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

    document.getElementById("informacoesCliente").innerHTML = informacoes;

    // Ocultar área de cadastro e botões de ação
    document.getElementById("divCadastro").style.display = "none";
    document.getElementById("buttonCadastrar").style.display = "none";
    document.getElementById("buttonResetar").style.display = "none";

    // Mostrar área de informações do cliente
    document.getElementById("informacoesCliente").style.display = "block";
});
