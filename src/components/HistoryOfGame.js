export default function HistoryOfGame(props) {
    const moves = props.history.map((step, move) => {
        const desc = move ? `Go to move #${move}` : "Go to start of the game";
        return <li key={move}><button onClick={() => props.onHistoryChangeClick(move)}>{desc}</button></li>
    }).filter((step, move) => move !== props.history.length - 1) // FIXME: я два раза гоню весь массив, просто чтобы окусть последний элемент. 
    return <ol>{moves}</ol>
}