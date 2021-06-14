import * as React from "react";
import { css } from "@emotion/css";
import { Panel } from "@/components/atoms/Panel";
import { ROWS, COLUMNS } from "@/constants/board";
import { Card } from "@/models/card";

type Props = {
  width: number;
  height: number;
  board: Card[];
};

export const PanelTable: React.VFC<Props> = (props) => {
  const { width, height, board } = props;

  const panels = board
    .flat()
    .map((card, index) => (
      <Panel
        color={card.color}
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
    grid-template-rows: ${defineSize(ROWS, height)};
    grid-template-columns: ${defineSize(COLUMNS, width)};
    grid-gap: 8px;
    margin: 0 auto;
    grid-row: 2;
    grid-column: 2;
  `;

  return <div className={panelTableStyle}>{panels}</div>;
};
