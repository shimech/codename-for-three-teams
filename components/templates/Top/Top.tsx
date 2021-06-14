import React, { useState } from "react";
import { css } from "@emotion/css";
import { Button } from "@/components/atoms/Button";
import { PanelTable } from "@/components/molecules/PanelTable";
import { createBoard } from "@/utils/utils";

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

export const Top: React.VFC = () => {
  const [board, setBoard] = useState(createBoard());

  return (
    <div className={topStyle}>
      <Button
        text={"New Game"}
        onClick={() => setBoard(createBoard())}
      ></Button>
      <PanelTable width={120} height={80} board={board}></PanelTable>
    </div>
  );
};
