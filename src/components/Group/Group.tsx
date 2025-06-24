import { ReactNode } from "react";
import "./Group.scss";
import { CN, CLSX, EN } from "../../utils";
import { Group as MantineGroup } from "@mantine/core";

type GroupProps = {
  children: ReactNode;
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
};

const ComponentName = CN("Group");
const parts = {
  group: ComponentName,
};

export const Group = ({ children, justify = "center" }: GroupProps) => {
  return (
    <MantineGroup
      justify={justify}
      classNames={{
        root: CLSX(parts.group),
      }}
    >
      {children}
    </MantineGroup>
  );
};
