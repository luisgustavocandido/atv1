document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked');
    const checkboxes = document.querySelectorAll('input[name="interesse"]:checked');
    const texto1 = document.getElementById('texto1').value;
    const texto2 = document.getElementById('texto2').value;
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    let textoResposta = `<strong>Seleções do usuário:</strong><br><strong>Sexo:</strong> ${opcaoSelecionada ? opcaoSelecionada.value : 'Nenhuma'}<br><strong>Interesses:</strong>`;
    checkboxes.forEach((checkbox) => {
      textoResposta += `<br>- ${checkbox.value}`;
    });
    textoResposta += `<br><strong>Nome:</strong> ${texto1}<br><strong>Time que torce:</strong> ${texto2}<br><strong>Idade:</strong> ${numero1}<br><strong>Idade que espera ter:</strong> ${numero2}`;

    document.getElementById('resposta').innerHTML = textoResposta;
  });
});
