import React from "react";
import { checkWinner, handleClick } from "./utils";

export default function Board({
  board,
  setBoard,
  winningStatus,
  setWinningStatus,
}) {
  const [turns, setTruns] = React.useState(true);

  const handleOptionClick = (index, setBoard, board, turns, setTruns) => {
    if (winningStatus !== false) return;
    handleClick(index, setBoard, board, turns, setTruns);
    let winCondition = checkWinner(board);
    if (winCondition !== false) {
      setWinningStatus([...winCondition]);
      if (turns) setPlayerX(1 + playerX);
      else {
        setPlayerY(playerY + 1);
      }
    }
  };

  const resetData = ["", "", "", "", "", "", "", "", ""];
  const [playerX, setPlayerX] = React.useState(0);
  const [playerY, setPlayerY] = React.useState(0);

  return (
    <div className=" flex justify-center items-center  flex-col">
      <div className="absolute  top-0 w-[100%] flex px-4 justify-between text-2xl font-bold">
        <span>Player(X) :{playerX}</span>
        <span>Player(O) :{playerY}</span>
      </div>
      {winningStatus !== false && (
        <div className="bg-white border-2  w-[300px]  mb-6 flex justify-center flex-col items-center rounded-lg text-center">
          Congratulations
          <br />
          <p className="text-4xl">"{turns ? "O" : "X"}"</p>
        </div>
      )}
      <div className="grid grid-cols-3 gap-10 border-4 rounded-lg p-12">
        {board.map((item, index) => {
          return (
            <button
              key={index}
              className={`text-black w-10 h-10 border-2 ${
                winningStatus !== false
                  ? winningStatus.includes(index)
                    ? "border-green-400"
                    : ""
                  : ""
              } flex justify-center items-center active:border-blue-500`}
              onClick={() =>
                handleOptionClick(index, setBoard, board, turns, setTruns)
              }
            >
              {item === "" ? "-" : item}
            </button>
          );
        })}
      </div>
      {winningStatus === false && <div>Player "{turns ? "X" : "O"}"" turn</div>}
      <button
        onClick={() => {
          setBoard(resetData);
          setWinningStatus(false);
          setTruns(true);
        }}
        className="border-2 mt-4 w-[100px] rounded text-black active:bg-slate-400 py-2 border-black"
      >
        Start Over
      </button>

      <button
        onClick={() => {
          setBoard(resetData);
          setWinningStatus(false);
          setTruns(true);
          setPlayerX(0);
          setPlayerY(0);
        }}
        className="absolute  bottom-0 mb-4 border-2 mt-4 w-[250px] rounded text-black active:bg-slate-400 py-2 border-black"
      >
        Reset Score
      </button>
    </div>
  );
}
