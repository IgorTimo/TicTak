export default function StatusOfGame(props){
    const winner = calculateWinner(props.history[props.stepNumber].squares);

        let status;
        if (winner) {
            status = `Win ${winner}`
        } else if(props.history.length === 10) {
            status = "Draw"
        } else{
            status = `Next player: ${props.xIsNext ? "X" : "O"}`
        }

        return <div>{status}</div>
}

export function calculateWinner(squares) {
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}