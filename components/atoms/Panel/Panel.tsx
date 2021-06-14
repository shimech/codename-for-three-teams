import * as React from "react";
import { css } from "@emotion/css";

type Props = {
  color: string;
  width: number;
  height: number;
};

const mag = 1.2;

export const Panel: React.VFC<Props> = (props) => {
  const { color, width, height } = props;
  const panelStyle = css`
    background-color: ${color};
    width: ${width}px;
    height: ${height}px;
    border: none;
    cursor: pointer;
    &:hover {
      position: relative;
      width: ${width * mag}px;
      height: ${height * mag}px;
      right: ${(width * (mag - 1)) / 2}px;
      bottom: ${(height * (mag - 1)) / 2}px;
      border: solid 4px #70c1b3;
    }
  `;
  return <button className={panelStyle}></button>;
};
