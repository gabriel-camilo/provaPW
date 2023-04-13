// Define um array para armazenar os produtos adicionados
let produtos = [];

// Define função para adicionar produtos à lista
function adicionarProduto() {
  // Pega o valor do campo nome do produto
  const produtoInput = document.getElementById("produto");
  const nomeProduto = produtoInput.value.trim();

  // Se o campo estiver vazio, exibe mensagem de erro
  if (!nomeProduto) {
    alert("Por favor, informe o nome do produto.");
    return;
  }

  // Adiciona o produto ao array de produtos
  produtos.push(nomeProduto);

  // Limpa o campo de nome do produto
  produtoInput.value = "";

  // Atualiza a tabela de produtos
  atualizarTabela();
}

// Define função para limpar os campos
function limparProduto() {
  // Limpa o campo de nome do produto
  document.getElementById("produto").value = "";
}

// Define função para excluir um produto da lista
function excluirProduto(index) {
  // Remove o produto do array de produtos
  produtos.splice(index, 1);

  // Atualiza a tabela de produtos
  atualizarTabela();
}

// Define arrow function para carregar os elementos da tabela de produtos
const atualizarTabela = () => {
  // Pega o elemento tbody da tabela de produtos
  const tbody = document.getElementById("tbody");

  // Limpa o conteúdo atual da tabela
  tbody.innerHTML = "";

  // Percorre o array de produtos e adiciona um elemento li para cada produto
  produtos.forEach((produto, index) => {
    const tr = document.createElement("tr");

    // Define o conteúdo da coluna ID com o índice do produto no array
    const tdId = document.createElement("td");
    tdId.textContent = index + 1;
    tr.appendChild(tdId);

    // Define o conteúdo da coluna nome do produto com o nome do produto
    const tdNomeProduto = document.createElement("td");
    tdNomeProduto.textContent = produto;
    tr.appendChild(tdNomeProduto);

    // Define o conteúdo da coluna ações com botões de alterar e excluir
    const tdAcoes = document.createElement("td");

    // Define o botão de alterar
    const botaoAlterar = document.createElement("button");
    botaoAlterar.textContent = "Alterar";
    botaoAlterar.addEventListener("click", () =>
      alert("Função indisponível no momento.")
    );
    tdAcoes.appendChild(botaoAlterar);

    // Define o botão de excluir
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", () => excluirProduto(index));
    tdAcoes.appendChild(botaoExcluir);

    tr.appendChild(tdAcoes);

    // Adiciona a linha à tabela
    tbody.appendChild(tr);
  });
};
