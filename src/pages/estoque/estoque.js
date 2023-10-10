let alimentos = [];

// Função para adicionar um alimento
function adicionarAlimento() {
    const nome = document.getElementById("nome").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);

    if (nome && quantidade) {
        alimentos.push({ nome, quantidade });
        atualizarTabela();
        limparCampos();
    }
}

// Função para atualizar a tabela de alimentos
function atualizarTabela() {
    const tabela = document.getElementById("estoque");
    tabela.innerHTML = "<tr><th>Nome</th><th>Quantidade</th><th>Ação</th></tr>";

    alimentos.forEach((alimento, index) => {
        tabela.innerHTML += `
            <tr>
                <td>${alimento.nome}</td>
                <td id="quantidade-${index}">${alimento.quantidade}</td>
                <td>
                    <button onclick="diminuirQuantidade(${index})">-</button>
                    <button onclick="aumentarQuantidade(${index})">+</button>
                    <i class="fas fa-trash" onclick="excluirAlimento(${index})"></i>
                </td>
            </tr>`;
    });
}

// Função para aumentar a quantidade de um alimento
function aumentarQuantidade(index) {
    alimentos[index].quantidade++;
    atualizarTabela();
}

// Função para diminuir a quantidade de um alimento
function diminuirQuantidade(index) {
    if (alimentos[index].quantidade > 0) {
        alimentos[index].quantidade--;
        atualizarTabela();
    }
}

function excluirAlimento(index) {
    alimentos.splice(index, 1);
    atualizarTabela();
}

// Função para limpar os campos após adicionar um alimento
function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("quantidade").value = "";
}