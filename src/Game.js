import { useState } from "react";
import Board from "./components/Board";
import HistoryOfGame from "./components/HistoryOfGame";
import StatusOfGame from "./components/StautsOfGame"; // FIXME: вот что-то я сильно не уверен, что это хорошая практика экспортировать просто функцию из другого элемента
import { aiMove } from "./utils/aiMove";
import { calculateWinner } from "./utils/calculateWinner";
import styled from "styled-components";

export default function Game(props) {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXisNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [winIndexes, setWinIndexes] = useState([10]);

  function handelSquareClick(i) {
    const current = history[history.length - 1];
    let squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    if (!props.isHuman && !calculateWinner(squares)) {
      squares = aiMove(squares); //включается тупейший ИИ
    } else {
      setXisNext(!xIsNext);
    }
    setHistory(history.concat({ squares }));
    setStepNumber(history.length);
    setWinIndexes(calculateWinner(squares) || []);
  }

  function handelHistoryChangeClick(step) {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
    setHistory(history.slice(0, step + 1));
  }

  return (
    <GameDiv>
      <BoardDiv>
        <Board
          squares={history[stepNumber].squares}
          winIndexes={winIndexes}
          onSquareClick={handelSquareClick}
        />
      </BoardDiv>
      <GameInfoDiv>
        <StatusOfGame
          history={history}
          xIsNext={xIsNext}
          stepNumber={stepNumber}
        />
        {props.isHistory ? (
          <HistoryOfGame
            history={history}
            onHistoryChangeClick={handelHistoryChangeClick}
          />
        ) : (
          "No history"
        )}
      </GameInfoDiv>
    </GameDiv>
  );
}

const GameDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const GameInfoDiv = styled.div`
  margin-left: 30px;
  @media screen and (max-width: 450px) {
    margin: 0;
  }
`;

const BoardDiv = styled.div`
min-width: 200px;
  display: flex;
  flex-direction: row;
  &:first-child {
    margin: 10px 0;
  }
`;
