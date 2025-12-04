


//Botao 1
const btn = document.querySelector('.Btn_1 img');

btn.parentElement.addEventListener('mouseenter', () => {
  btn.src = 'Asstes/IMG/Add_cliente_Anin.png';
});

btn.parentElement.addEventListener('mouseleave', () => {
  btn.src = 'Asstes/IMG/Add_cliente.png';
});



//Botao 2
const btn_2 = document.querySelector('.Btn_2 img');

btn_2.parentElement.addEventListener('mouseenter', () => {
  btn_2.src = 'Asstes/IMG/Procuração_anin.png';
});

btn_2.parentElement.addEventListener('mouseleave', () => {
  btn_2.src = 'Asstes/IMG/Procutação.png';
});



//Botao 3
const btn_3 = document.querySelector('.Btn_3 img');

btn_3.parentElement.addEventListener('mouseenter', () => {
  btn_3.src = 'Asstes/IMG/Contrato_anin.png';
});

btn_3.parentElement.addEventListener('mouseleave', () => {
  btn_3.src = 'Asstes/IMG/Contrato.png';
});

//Botao 4
const btn_4 = document.querySelector('.Btn_4 img');

btn_4.parentElement.addEventListener('mouseenter', () => {
  btn_4.src = 'Asstes/IMG/Planilha_anin.png';
});

btn_4.parentElement.addEventListener('mouseleave', () => {
  btn_4.src = 'Asstes/IMG/Planilha.png';
});


//Carregar paginas nas principaos
function carregarPagina(arquivo) {
    const overlay = document.getElementById("overlay");
    const conteudo = document.getElementById("conteudo");

    overlay.style.display = "block"; // abre o painel inferior

    fetch(arquivo)
        .then(response => response.text())
        .then(html => {
            conteudo.innerHTML = html; // carrega a outra página dentro do painel
        })
        .catch(error => {
            conteudo.innerHTML = "<p>Erro ao carregar a página.</p>";
        });
}

