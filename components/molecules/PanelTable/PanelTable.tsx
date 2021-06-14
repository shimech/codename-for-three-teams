import * as React from "react";
import { css } from "@emotion/css";
import { Panel } from "@/components/atoms/Panel";

type Props = {
  width: number;
  height: number;
  numRows: number;
  numColumns: number;
  board: number[];
};

const colors: string[] = [
  "#50514F",
  "#EEEEEE",
  "#F25F5C",
  "#247BA0",
  "#FFE066",
];

export const PanelTable: React.VFC<Props> = (props) => {
  const { width, height, numRows, numColumns, board } = props;

  const panels = board
    .flat()
    .map((id, index) => (
      <Panel
        color={colors[id]}
        width={width}
        height={height}
        key={index}
      ></Panel>
    ));

  const defineSize = (num: number, value: number): string => {
    const sizes: string[] = [];
    for (let i = 0; i < num; i++) {
      sizes.push(`${value}px`);
    }
    return sizes.join(" ");
  };

  const panelTableStyle = css`
    display: grid;
    grid-template-rows: ${defineSize(numRows, height)};
    grid-template-columns: ${defineSize(numColumns, width)};
    grid-gap: 8px;
    margin: 0 auto;
    grid-row: 2;
    grid-column: 2;
  `;

  return <div className={panelTableStyle}>{panels}</div>;
};
