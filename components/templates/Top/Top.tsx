import * as React from "react";
import { css } from "@emotion/css";
import { Button } from "@/components/atoms/Button";
import { PanelTable } from "@/components/molecules/PanelTable";

const width: number = 1280;
const marginTop: number = 40;

const topStyle = css`
  margin-top: ${marginTop}px;
  margin-left: calc((100vw - ${width}px) / 2);
  width: ${width}px;
  height: calc(100vh - ${marginTop}px);
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 240px 1fr 240px;
  gap: 24px 0;
`;

const createBoard = (
  numRows: number,
  numColumns: number,
  numTeams: number[],
  numAssassins: number
) => {
  const sum = (array: number[]) => {
    return array.reduce((prev, current) => prev + current);
  };
  const numCitizens: number =
    numRows * numColumns - sum(numTeams) - numAssassins;
  const board: number[] = [];
  numTeams.forEach((num, index) => {
    for (let i = 0; i < num; i++) {
      board.push(index + 2);
    }
  });
  for (let i = 0; i < numAssassins; i++) {
    board.push(0);
  }
  for (let i = 0; i < numCitizens; i++) {
    board.push(1);
  }
  for (let i = board.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = board[i];
    board[i] = board[j];
    board[j] = tmp;
  }
  return board;
};

const numRows: number = 6;
const numColumns: number = 6;
const numTeams: number[] = [10, 9, 8];
const numAssassins: number = 1;

export const Top: React.VFC = () => {
  return (
    <div className={topStyle}>
      <Button text={"New Game"}></Button>
      <PanelTable
        width={120}
        height={80}
        numRows={numRows}
        numColumns={numColumns}
        board={createBoard(numRows, numColumns, numTeams, numAssassins)}
      ></PanelTable>
    </div>
  );
};
