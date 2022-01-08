import Square from "./Square";
import styled from "styled-components";


export default function Board(props) {
    // isWinerSquare = {props.winIndexes.include(i)}

    function renderSquare(i) {
        return <Square value={props.squares[i]} key={i} isWinnerSquare = {props.winIndexes.includes(i)}  onClick={() => props.onSquareClick(i)} />;
    }

    function renderLine(start, end) {
        let result = [];
        for (let i = start; i <= end; i++) {
            result.push(renderSquare(i))
        }
        return (<div className="board-row">
            {result}

        </div>);
    }

    return (
        <div>
            {renderLine(0, 2)}
            {renderLine(3, 5)}
            {renderLine(6, 8)}
        </div>
    );

}


