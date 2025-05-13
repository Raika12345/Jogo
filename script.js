const board = document.getElementById('board');
const message = document.getElementById('message');
const resetBtn = document.getElementById('reset');
let currentPlayer = 'X'; // Jogador Humano é 'X'
let cells = Array(16).fill('');
let gameActive = true;

function createBoard() {
  board.innerHTML = '';
  cells.forEach((cell, index) => {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.dataset.index = index;
    div.addEventListener('click', makeMove);
    div.textContent = cell;
    board.appendChild(div);
  });
}

function makeMove(e) {
  const index = e.target.dataset.index;

  if (cells[index] === '' && gameActive) {
    cells[index] = currentPlayer;
    updateBoard();
    if (checkWinner(currentPlayer)) {
      message.textContent = `Você venceu!`;
      gameActive = false;
    } else if (cells.every(cell => cell !== '')) {
      message.textContent = 'Empate!';
      gameActive = false;
    } else {
      currentPlayer = 'O'; // Passa para IA
      setTimeout(aiMove, 500); // Pequeno delay para IA parecer "pensar"
    }
  }
}

function aiMove() {
  if (!gameActive) return;
  
  // Estratégia simples: escolher uma célula aleatória vazia
  const emptyCells = cells.map((cell, index) => cell === '' ? index : null).filter(i => i !== null);
  
  if (emptyCells.length > 0) {
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    cells[randomIndex] = currentPlayer;
    updateBoard();
    if (checkWinner(currentPlayer)) {
      message.textContent = `IA venceu!`;
      gameActive = false;
    } else if (cells.every(cell => cell !== '')) {
      message.textContent = 'Empate!';
      gameActive = false;
    } else {
      currentPlayer = 'X'; // Volta para o humano
    }
  }
}

function updateBoard() {
  const cellDivs = document.querySelectorAll('.cell');
  cellDivs.forEach((div, index) => {
    div.textContent = cells[index];
  });
}

function checkWinner(player) {
  const wins = [
    // Linhas
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    // Colunas
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    // Diagonais
    [0, 5, 10, 15],
    [3, 6, 9, 12]
  ];

  return wins.some(combo => {
    return combo.every(index => cells[index] === player);
  });
}

resetBtn.addEventListener('click', () => {
  cells = Array(16).fill('');
  currentPlayer = 'X';
  message.textContent = '';
  gameActive = true;
  createBoard();
});

createBoard();
