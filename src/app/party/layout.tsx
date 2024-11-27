import { Plus } from "lucide-react";
import type { Metadata } from "next";
import React from "react";
import getCharacters from "../../actions/get-characters";
import PartyDialog from "../../components/party-dialog";
import AppBar from "../../components/ui/app-bar";
import { Button } from "../../components/ui/button";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const characters = getCharacters();
  return (
    <div className={"flex flex-col"}>
      <AppBar>
        <PartyDialog characters={characters}>
          <Button variant={"ghost"}>
            <span>Add</span>
            <Plus />
          </Button>
        </PartyDialog>
      </AppBar>
      {children}
    </div>
  );
};

export default Layout;