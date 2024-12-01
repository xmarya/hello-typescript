import { useEffect, useRef, useState } from "react";
import { Square } from "../../components/Square";

type Player = "X" | "O" | "Draw" | null;

function winPattrens(squares: Player[]): Player {
  const pattrens = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < pattrens.length; index++) {
    const [sq1, sq2, sq3] = pattrens[index];

    // if squares[sq1] isn't nullish and if it is equal to both other squares in the win pattrens
    if (
      squares[sq1] &&
      squares[sq1] === squares[sq2] &&
      squares[sq1] === squares[sq3]
    ) {
      return squares[sq1];
    }
  }

  return null;
}

const squaresInitialState: Player[] = Array(9).fill(null);
const playersTurnResetState = Math.round(Math.random() * 1) === 0 ? "O" : "X";

export default function TicTacToe() {
  // const ref = useRef<HTMLButtonElement>(null);
  const refs = useRef<HTMLButtonElement[]>([]);
  const [squares, setSquares] = useState<Player[]>(squaresInitialState);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    playersTurnResetState
  );
  const [winner, setWinner] = useState<Player>(null);

  useEffect(() => {
    console.log("board re-render");
    const winner = winPattrens(squares);
    if (winner) setWinner(winner);
    if (!winner && squares.every((sq) => sq !== null)) setWinner("Draw");
  }, [squares]);

  function setSquareValue(squareIndex: number) {
    // 1) setting each square in the array to currentPlayer value:
    const squareValue = squares.map((value, index) =>
      index === squareIndex ? currentPlayer : value // if this index is not selected keep its as it is whether it's a null or not
    ); 

    // 2) set the value using the corresponding ref to avoid re-rendering all the squares:
  //  refs.current[squareIndex].innerText
  refs.current[squareIndex].innerText = currentPlayer;
  refs.current[squareIndex].classList.add(currentPlayer.toLowerCase());

    // 3) set the new squares to the state:
    setSquares(squareValue);

    // 4) change the player:
    setCurrentPlayer((cp) => (cp === "O" ? "X" : "O"));
  }

  function gameReset(): void {
    setSquares(squaresInitialState);
    squares.map((_,index) => refs.current[index].innerText = "");
    setWinner(null);
    setCurrentPlayer(playersTurnResetState);
  }

  return (
    <div style={{display:"flex", flexDirection:"column", gap:"3rem", alignItems:"center", marginTop: "5rem"}}>
      <h1>{winner ? `Congrats to ${winner} !🎊`
        : `Start the game!`}</h1>
      <div className="board">
        {squares.map((_, index) => {
          // const ref = useRef(null);
          return (
            <Square
              /* OLD CODE (leaved for reference): 
              // ref={(curRef) => refs.current.push(curRef)}

              ERROR: HTMLButtonElement | null' is not assignable to 'HTMLButtonElement'
              The error occurs because curRef in ref callback can be null. 
              In React, when a component unmounts or is no longer rendered, React passes null 
              to the ref callback to clean up.
              the SOLUTION is handle the posibilty of curRef being a null value
              */
            ref={(curRef) => curRef && refs.current.push(curRef)}
            key={index}
            value={squares[index]} // the value of each square is got from the squares array when one of its indecis' values is changed
            // turn={currentPlayer}
            winner={winner}
            onClick={() => setSquareValue(index)}
            />
          );
        })}
        <button type="reset" onClick={gameReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
