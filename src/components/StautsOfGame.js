import { calculateWinner } from "../utils/calculateWinner";

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

