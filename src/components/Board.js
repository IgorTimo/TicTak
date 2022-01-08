import Square from "./Square";

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

    // return (
    //     <div>
    //         <div className="board-row">
    //         
    //             {renderSquare(0)}
    //             {renderSquare(1)}
    //             {renderSquare(2)}
    //         </div>
    //         <div className="board-row">
    //             {renderSquare(3)}
    //             {renderSquare(4)}
    //             {renderSquare(5)}
    //         </div>
    //         <div className="board-row">
    //             {renderSquare(6)}
    //             {renderSquare(7)}
    //             {renderSquare(8)}
    //         </div>
    //     </div>
    // );



}