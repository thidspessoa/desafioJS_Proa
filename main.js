let itensQ = 0;
let listItens = []; // Declarei a lista de itens fora das funções para que ela persista entre chamadas
let valorTotal = 0;

function adicionarItem() {
    let novoItem = {
        produto: 'Chopp',
        quantidade: 1,
        preco: 5.0 // Preço de um chopp
    };

    listItens.push(novoItem);
    atualizarQuantidade();
}

function removerItens() {
    if (listItens.length > 0) {
        listItens.pop(); // Remove o último item da lista
        atualizarQuantidade();
    }
}

function resetarItens() {
    listItens = [];
    atualizarQuantidade();
}

function exibirQtd() {
    let quantidadeTotal = 0;
    let produto = null
    
    for (let i = 0; i < listItens.length; i++) { //Exibi cada item e sua quantidaed
        quantidadeTotal += listItens[i].quantidade;
        produto = listItens[i].produto;
    }

    return `${produto} x${quantidadeTotal}`;
}

function atualizarQuantidade() {
    itensQ = listItens.length; // Atualiza a quantidade com base no tamanho da lista de itens
    let inputItens = document.getElementById('quantity');
    let exibirItem = document.getElementById('itensArea');

    exibirItem.value = exibirQtd();

    inputItens.value = itensQ;
    console.log(listItens);
}

function calcularConta() {
    // console.log(listItens)


    // Calcula o valor total dos itens pedidos
    for (let i = 0; i < listItens.length; i++) {
        valorTotal += listItens[i].preco * listItens[i].quantidade;
    }

    // Aplica o desconto de happy hour se necessário (até às 19h)
    let data = new Date();
    let hora = data.getHours();
    console.log(typeof(hora))

    if (hora > 19 && listItens.length > 0) { // Aplica desconto apenas se estiver antes das 19h e houver itens pedidos
        let desconto = valorTotal * (10/100); 
        valorTotal += desconto; // Aplica um desconto de 10%
    }

    // Exibe o valor total na página HTML
    let valorConta = document.getElementById('valorConta');
    valorConta.value = '\nValor da Conta: R$ ' + valorTotal.toFixed(2);
}

//CORRIGIR LOGICA (DESCONTO NÃO É DESCONTO)
   