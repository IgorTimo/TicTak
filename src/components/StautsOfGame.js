import { calculateWinner } from "../utils/calculateWinner";

export default function StatusOfGame(props){
    const current = props.history[props.stepNumber].squares
    const winner = calculateWinner(current);

        let status;
        if (winner) {
            status = `Win ${current[winner[0]]}`
        } else if(props.history.length === 10) {
            status = "Draw"
        } else{
            status = `Next player: ${props.xIsNext ? "X" : "O"}`
        }

        return <div>{status}</div>
}

