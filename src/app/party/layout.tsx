"use client";
import { Copy, Import, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import ImportPartiesDialog from "../../components/import-party-dialog";
import getCharacters from "../../data-actions/get-characters";
import PartyDialog from "../../components/party-dialog";
import AppBar from "../../components/ui/app-bar";
import { Button } from "../../components/ui/button";
import getParties from "../../data-actions/get-parties";
import { exportPartiesAndCharacters } from "../../lib/importer";
import { Character, Party } from "../../types/character";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [parties, setParties] = useState<Party[]>([]);
  useEffect(() => {
    setCharacters(getCharacters());
    setParties(getParties());
  }, []);

  return (
    <div className={"flex flex-col"}>
      <AppBar>
        <div className={"flex gap-2"}>
          <ImportPartiesDialog>
            <Button variant={"ghost"}>
              <span>Import party</span>
              <Import />
            </Button>
          </ImportPartiesDialog>
          <Button
            variant={"ghost"}
            onClick={() => exportPartiesAndCharacters(parties, characters)}
          >
            <span>Export parties</span>
            <Copy />
          </Button>
          <PartyDialog characters={characters}>
            <Button variant={"ghost"}>
              <span>Add</span>
              <Plus />
            </Button>
          </PartyDialog>
        </div>
      </AppBar>
      {children}
    </div>
  );
};

export default Layout;
