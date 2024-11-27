"use client";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import getCharacters from "../../data-actions/get-characters";
import PartyDialog from "../../components/party-dialog";
import AppBar from "../../components/ui/app-bar";
import { Button } from "../../components/ui/button";
import { Character } from "../../types/character";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    setCharacters(getCharacters());
  }, []);

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
