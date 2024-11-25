import React from "react";
import { SidebarTrigger } from "./sidebar";

type Props = {
  children?: React.ReactNode;
};
const AppBar = (props: Props) => {
  const { children } = props;
  return (
    <div className={"flex justify-between"}>
      <SidebarTrigger />
      {children}
    </div>
  );
};

export default AppBar;
