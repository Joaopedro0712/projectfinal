const items = [
    {
        id: 0,
        nome: 'Corinthians',
        img: 'curintia.png',
        descricao: 'Corinthians Uniform 23/24  ',
        preco: '$89,99'
    },
    {
        id: 1,
        nome: 'Real Madrid',
        img: 'real 23.png',
        descricao: 'Real Madrid Uniform 23/24 ',
        preco: '$89,99'
    },
    {
        id: 2,
        nome: 'Santos',
        img: 'santos 23.png',
        descricao: 'Santos Uniform 23/24  ',
        preco: '$89,99'
    },
    {
        id: 3,
        nome: 'Parana Clube',
        img: 'parana 23.png',
        descricao: 'Parana Club Uniform 23/24   ',
        preco: '$89,99'
    }

];

function loja() {
    var camisasTimes = document.getElementById('produtos');
    camisasTimes.innerHTML = ''; // Limpar o conteúdo antes de adicionar os itens

    for (var i = 0; i < items.length; i++) {
        var val = items[i];
        camisasTimes.innerHTML += `
            <div class="card">
                <div class="card-imagem"><img src="${items[i].img}" width="230px"/></div>
                <div class="card-titulo">
                    <p>${items[i].nome}</p>
                </div>
                <div class="card-desc">
                    <p>${items[i].descricao}</p>
                </div>
                <div class="card-preco"> <!-- Corrigido aqui -->
                    <p>${items[i].preco}</p>
                </div>
                <div class="card-carro">
                    <a key="${items[i].id}" href="">
                    <button>Add to Cart<button>
                    </a>
                </div>
            </div>
        `;
    }
}

loja();
