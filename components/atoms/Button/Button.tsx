import * as React from "react";
import { css } from "@emotion/css";

type Props = {
  text: string;
  onClick: () => void;
};

const buttonStyle = css`
  border: none;
  grid-row: 1;
  grid-column: 2;
  width: 180px;
  height: 60px;
  margin: auto;
  font-size: 20px;
  background-color: #70c1b3;
  color: #000000;
`;

export const Button: React.VFC<Props> = (props) => {
  const { text, onClick } = props;
  return (
    <button className={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};
