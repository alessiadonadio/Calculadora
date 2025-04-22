let resultado = document.getElementById('resultado');

function adicionar(valor) {
  resultado.value += valor;
}

function limpar() {
  resultado.value = '';
}

function apagar() {
  let tela = document.getElementById('resultado');
  tela.value = tela.value.slice(0, -1);
}

function calcular() {
  try {
    // Avaliar a expressão, considerando funções como Math.sin(), Math.cos(), etc.
    resultado.value = eval(resultado.value);
  } catch {
    resultado.value = 'Erro';
  }
}
