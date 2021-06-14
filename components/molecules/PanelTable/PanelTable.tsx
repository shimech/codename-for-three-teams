import * as React from "react";
import { Panel } from "@/components/atoms/Panel";

type Props = {};

export const PanelTable: React.VFC<Props> = (props) => {
  return (
    <div>
      <Panel color={"red"}></Panel>
    </div>
  );
};
