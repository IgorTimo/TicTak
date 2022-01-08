import styled from "styled-components";

export default function Square(props) {
  //border = {props.isWinerSquare ? "4px solid red" : "none"}

  return (
    <TikTacButton
      color={props.isWinnerSquare ? "green" : "black"}
      onClick={props.onClick}
    >
      {props.value}
    </TikTacButton>
  );
}

const TikTacButton = styled.button`
  color: ${(props) => props.color};
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 48px;
  font-weight: bold;
  line-height: 72px;
  height: 72px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 72px;

  &:focus {
    outline: none;
    border: 4px solid red;
  }

  @media screen and (max-width: 600px) {
    font-size: 36px;
    line-height: 48px;
    height: 48px;
    width: 48px;
  }
`;
