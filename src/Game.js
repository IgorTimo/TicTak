import { useState } from "react";
import Board from "./components/Board";
import HistoryOfGame from "./components/HistoryOfGame";
import StatusOfGame from "./components/StautsOfGame"; // FIXME: вот что-то я сильно не уверен, что это хорошая практика экспортировать просто функцию из другого элемента 
import { aiMove } from "./utils/aiMove";
import { calculateWinner } from "./utils/calculateWinner";

export default function Game(props) {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [xIsNext, setXisNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

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

    }

    function handelHistoryChangeClick(step) {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
        setHistory(history.slice(0, step + 1));
    }



    return (
        <div className="game">
            <div className="game-board">
                <Board squares={history[stepNumber].squares} onSquareClick={handelSquareClick} />
            </div>
            <div className="game-info">
                <StatusOfGame history={history} xIsNext={xIsNext} stepNumber={stepNumber} />
                {props.isHistory ? (<HistoryOfGame history={history} onHistoryChangeClick={handelHistoryChangeClick} />) : "No history"}
            </div>
        </div>
    );

}

