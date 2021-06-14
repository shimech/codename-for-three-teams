import * as React from "react";
import { css } from "@emotion/css";

type Props = {
  color: string;
  width: number;
  height: number;
};

export const Panel: React.VFC<Props> = (props) => {
  const { color, width, height } = props;
  const panelStyle = css`
    background-color: ${color};
    width: ${width}px;
    height: ${height}px;
    border: none;
  `;
  return <button className={panelStyle}></button>;
};
