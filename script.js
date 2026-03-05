const produtosPorPagina = 8;

const produtos = [
  {
    nome: 'Sapato Masculino',
    descricao: 'Sapato infantil feito a mão.',
    categoria: 'Sapato Infantil',
    thumb: 'img/kit_sapato_masculino.webp'
  },
  {
    nome: 'Sapato Feminino',
    descricao: 'Sapato infantil feito a mão.',
    categoria: 'Sapato Infantil',
    thumb: 'img/kit_sapato_feminino.webp'
  },
  {
    nome: 'Enxoval Feminino',
    descricao: 'Kit Calcinha, babador e sapatinho.',
    categoria: 'Utilidade',
    thumb: 'img/kit_calcinha_babador.webp'
  },
  {
    nome: 'Toalha de Banho',
    descricao: 'Toalha personalizada com bordado.',
    categoria: 'Bordado',
    thumb: 'img/toalha_banho.webp'
  },
  {
    nome: 'Toalha de Rosto',
    descricao: 'Toalha personalizada com bordado.',
    categoria: 'Bordado',
    thumb: 'img/toalha_rosto.webp'
  },
  {
    nome: 'Porta Documentos',
    descricao: 'Porta documentos personalizado com bordado.',
    categoria: 'Utilidade',
    thumb: 'img/porta_documentos.webp'
  },
  {
    nome: 'Kit de fraldas',
    descricao: 'Fraldas mais toalha de banho personalizada.',
    categoria: 'Fralda',
    thumb: 'img/kit_fraldas.webp'
  },
  {
    nome: 'Enxoval com Bolsa',
    descricao: 'Kit enxoval com bolsa de maternidade.',
    categoria: 'Fralda',
    thumb: 'img/enxoval_bolsa_maternidade.webp'
  },
  {
    nome: 'Kit Enxoval',
    descricao: 'Kit enxoval com touca personalizada.',
    categoria: 'Fralda',
    thumb: 'img/kit_enxoval_touca.webp'
  },
  {
    nome: 'Mochila Infantil',
    descricao: 'mochila personalizada com bordado.',
    categoria: 'Mochila',
    thumb: 'img/mochila_costa.webp'
  },
  {
    nome: 'Mochila Infantil',
    descricao: 'mochila personalizada com bordado.',
    categoria: 'Mochila',
    thumb: 'img/mochila_feminina.webp'
  },
  {
    nome: 'Almofada amamentação',
    descricao: 'Almofada personalizada com bordado.',
    categoria: 'Utilidade',
    thumb: 'img/almofada_amamentação.webp'
  },
  {
    nome: 'Almofada amamentação',
    descricao: 'Almofada personalizada com bordado.',
    categoria: 'Utilidade',
    thumb: 'img/almofada.webp'
  },
  {
    nome: 'Porta Documentos',
    descricao: 'Porta documentos feminino.',
    categoria: 'Utilidade',
    thumb: 'img/porta_documento_feminino.webp'
  },
  {
    nome: 'Kit Masculino',
    descricao: 'Babador com cueca e chapeu.',
    categoria: 'Utilidade',
    thumb: 'img/enxoval_masculino.webp'
  },
  {
    nome: 'Necessaire feminina',
    descricao: 'Necessaire personalizada com bordado.',
    categoria: 'Utilidade',
    thumb: 'img/necessaire_feminina.webp'
  },
  {
    nome: 'Almofada Curuja',
    descricao: 'Almofada Coruja porsonalizada.',
    categoria: 'Utilidade',
    thumb: 'img/almofada_coruja.webp'
  },
  {
    nome: 'Almofada Pescoço',
    descricao: 'Almofada de pescoço porsonalizada.',
    categoria: 'Utilidade',
    thumb: 'img/almofada_pescoço.webp'
  },
  {
    nome: 'Kit Organizadores',
    descricao: 'Organizadores porsonalizada.',
    categoria: 'Utilidade',
    thumb: 'img/kit_organizadores.webp'
  },
  {
    nome: 'Cueiro masculino',
    descricao: 'Cueiro personalizada com bordado.',
    categoria: 'Bordado',
    thumb: 'img/kit_cueiro.webp'
  },
  {
    nome: 'Kit Enxoval',
    descricao: 'Enxoval com toalha de capuz personalizada.',
    categoria: 'Bordado',
    thumb: 'img/kit_enxoval_toalha.webp'
  },
  {
    nome: 'Enxoval Feminino',
    descricao: 'Kit enxoval personalizada com bordado.',
    categoria: 'Enxoval',
    thumb: 'img/kit_enxoval_feminino.webp'
  }

];


const catalog = document.getElementById('catalog');
const paginacao = document.getElementById('paginacao');
const buscaNome = document.getElementById('buscaNome');
const buscaCategoria = document.getElementById('buscaCategoria');

let paginaAtual = 1;
let produtosFiltrados = [...produtos];

function filtrarProdutos() {
  const texto = buscaNome.value.toLowerCase();
  const categoria = buscaCategoria.value;

  produtosFiltrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(texto) &&
    (categoria === '' || p.categoria === categoria)
  );

  paginaAtual = 1;
  criarPaginacao();
  renderizar();
}

function renderizar() {
  catalog.innerHTML = '';

  const inicio = (paginaAtual - 1) * produtosPorPagina;
  const fim = inicio + produtosPorPagina;

  produtosFiltrados.slice(inicio, fim).forEach(p => {
    catalog.innerHTML += `
      <div class="card">
        <img src="${p.thumb}" loading="lazy" onclick="abrirModal('${p.thumb}')">
        <div class="info">
          <h3>${p.nome}</h3>
          <p>${p.descricao}</p>
          <small><strong>Categoria:</strong> ${p.categoria}</small>
          <a class="btn-whatsapp" href="https://wa.me/5565999393809" target="_blank">
            Pedir no WhatsApp
          </a>
        </div>
      </div>`;
  });
}

function criarPaginacao() {
  paginacao.innerHTML = '';
  const totalPaginas = Math.ceil(produtosFiltrados.length / produtosPorPagina);

  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.classList.toggle('ativo', i === paginaAtual);
    btn.onclick = () => {
      paginaAtual = i;
      criarPaginacao();
      renderizar();
    };
    paginacao.appendChild(btn);
  }
}

buscaNome.addEventListener('input', filtrarProdutos);
buscaCategoria.addEventListener('change', filtrarProdutos);

filtrarProdutos();
const modal = document.getElementById('modalImagem');
const imagemModal = document.getElementById('imagemModal');
const fechar = document.querySelector('.fechar');

function abrirModal(src) {
  imagemModal.src = src;
  modal.style.display = 'flex';
}

fechar.onclick = () => {
  modal.style.display = 'none';
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

document.getElementById("menuContato").addEventListener("click", function(e) {
  e.preventDefault();
  window.open(
    "https://wa.me/5565999393809?text=Olá,%20vim%20pelo%20site%20Ateliê%20da%20Nayres%20e%20quero%20mais%20informações.",
    "_blank"
  );

});








