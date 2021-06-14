import * as React from "react";
import { css } from "@emotion/css";

type Props = {
  color: string;
};

export const Panel: React.VFC<Props> = (props) => {
  const panelStyle = css`
    background-color: ${props.color};
    width: 80px;
    height: 80px;
  `;
  return <button className={panelStyle}></button>;
};
