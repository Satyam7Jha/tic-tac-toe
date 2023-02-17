import React from "react";
import Board from "./components/Board";
import useLocalStorage from "./hooks/useLocalStorage";
export default function App() {
  const [winningStatus, setWinningStatus] = useLocalStorage(
    "winningStatus",
    false
  );

  // const [turns, setTruns] = useLocalStorage("truns", "X");
  const [board, setBoard] = useLocalStorage("board", [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  return (
    <div className="flex justify-center flex-col gap-6 mt-10">
      <h1 className="text-center text-4xl font-bold">Tic tac toe</h1>
      <Board
        board={board}
        setBoard={setBoard}
        winningStatus={winningStatus}
        setWinningStatus={setWinningStatus}
      />
    </div>
  );
}
