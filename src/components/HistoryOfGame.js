import styled from "styled-components";


export default function HistoryOfGame(props) {
  const moves = props.history
    .map((step, move) => {
      const desc = move ? `Go to move #${move}` : "Go to start";
      return (
        <li key={move}>
          <StepButton onClick={() => props.onHistoryChangeClick(move)}>
            {desc}
          </StepButton>
        </li>
      );
    })
    .filter((step, move) => move !== props.history.length - 1);
  return <ol>{moves}</ol>;
}


const StepButton = styled.button`
    background-color: white;
    border: none;

    &:hover{
        color: green;
    }
`

