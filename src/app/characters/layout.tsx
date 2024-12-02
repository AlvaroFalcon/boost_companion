"use client";
import { Copy, Import, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import CharacterDialog from "../../components/character-dialog";
import ImportCharactersDialog from "../../components/import-characters-dialog";
import AppBar from "../../components/ui/app-bar";
import { Button } from "../../components/ui/button";
import getCharacters from "../../data-actions/get-characters";
import { exportCharacters } from "../../lib/importer";
import { Character } from "../../types/app-types";

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
        <div className={"flex gap-2"}>
          <ImportCharactersDialog>
            <Button variant={"ghost"}>
              <span>Import characters</span>
              <Import />
            </Button>
          </ImportCharactersDialog>
          <Button
            variant={"ghost"}
            onClick={() => exportCharacters(characters)}
          >
            <span>Export characters</span>
            <Copy />
          </Button>
          <CharacterDialog>
            <Button variant={"ghost"}>
              <span>Add</span>
              <Plus />
            </Button>
          </CharacterDialog>
        </div>
      </AppBar>
      {children}
    </div>
  );
};

export default Layout;
