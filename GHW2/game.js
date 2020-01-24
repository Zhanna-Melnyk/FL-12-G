const boardSize = 16;
var board = document.getElementById('board');
var table = document.createElement('table');
var side = 1;
board.appendChild(table);
for (let i = 0; i <= boardSize + 1; i++) {
  var row = document.createElement('tr');
  switch (i) {
    case 0:
      row.classList.add('top-side');
      break;
    case 1:
      row.classList.add('first-row');
      break;
    case boardSize:
      row.classList.add('last-row');
      break;
    case boardSize + 1:
      row.classList.add('bottom-side');
      break;
    default:
      row.classList.add('inner-row');
  }
  table.appendChild(row);
  for (let j = 0; j <= boardSize + 1; j++) {
    var cell = document.createElement('td');
    switch (j) {
      case 0:
        cell.classList.add('left-side');
        break;
      case 1:
        cell.classList.add('first-cell');
        break;
      case boardSize:
        cell.classList.add('last-cell');
        break;
      case boardSize + 1:
        cell.classList.add('right-side');
        break;
      default:
        cell.classList.add('inner-cell');
    }
    row.appendChild(cell);
    var stone = document.createElement('div');
    if (i >= 1 && i <= boardSize && j >= 1 && j <= boardSize) {
      stone.classList.add('stone', 'empty');
      if (i === 8 && j === 8) {
        stone.classList.remove('empty');
        stone.classList.add('black');
      }
      if (i === 8 && j === 7) {
        stone.classList.remove('empty');
        stone.classList.add('white');
      }
      if (i === 8 && j === 9) {
        stone.classList.remove('empty');
        stone.classList.add('red');
      }
      cell.appendChild(stone);
      stone.addEventListener(
        'click',
        (event) => {
          event.target.classList.remove('empty');
          if (side === 1) {
            event.target.classList.add('black');
          } else {
            event.target.classList.add('white');
          }
          side *= -1;
        },
        { capture: true, once: true}
      );
    }
  }
}
