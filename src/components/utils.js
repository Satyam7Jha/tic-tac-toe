export const checkWinner = (board) => {
  const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCondition.length; i++) {
    if (
      board[winningCondition[i][0]] === board[winningCondition[i][1]] &&
      board[winningCondition[i][1]] === board[winningCondition[i][2]] &&
      board[winningCondition[i][0]] !== ""
    ) {
      return winningCondition[i];
    }
  }
  return false;
};


export const handleClick = (index, setFunction, board, turns, setTurns) => {
  let tempBoard = board;
  let currentValue = board[index];
  if (currentValue === "") {
    tempBoard[index] = turns ? "X" : "O";
    setFunction([...tempBoard]);
    setTurns(!turns);
  }
};
