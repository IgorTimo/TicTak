export function aiMove(squares) {
  if (!squares[4]) {
    //ставим в центр, если там пусто
    squares[4] = "O";
    return squares;
  }
  if (findIndex(squares, "O", "X")) {  //пробуем выиграть
    squares[findIndex(squares, "O", "X")] = "O";
    return squares;
  }
  if (findIndex(squares, "X", "O")) { // блокируем победу человека
    squares[findIndex(squares, "X", "O")] = "O";
    return squares;
  }
  for (var i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      squares[i] = "O";
      break;
    }
  }
  return squares;
}

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function findIndex(squares, already, empty) {
  //возвращает номер ячейки в котрою можно поставить символ чтобы выиграть или блокировать чужой выигрыш. already уже 2 встроке, а empty ещё доступен для заполнения
  let index = null;
  lines.forEach((line) => {
    if (
      squares[line[0]] === already &&
      squares[line[1]] === already &&
      squares[line[2]] !== empty
    ) {
      index = line[2];
    }
    if (
      squares[line[0]] === already &&
      squares[line[1]] !== empty &&
      squares[line[2]] === already
    ) {
      index = line[1];
    }
    if (
      squares[line[0]] !== empty &&
      squares[line[1]] === already &&
      squares[line[2]] === already
    ) {
      index = line[0];
    }
  });
  return index;
}
