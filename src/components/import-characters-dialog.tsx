"use client";
import React from "react";
import { importCharacterData } from "../lib/importer";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type Props = {
  children: React.ReactNode;
};

const ImportCharactersDialog = (props: Props) => {
  const { children } = props;
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = () => {
    importCharacterData(inputValue);
  };

  return (
    <Dialog onOpenChange={(open) => (open ? setInputValue("") : null)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Import characters</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col items-start gap-4">
            <Label className="text-right">Import string</Label>
            <Input
              id="character-string"
              className="col-span-3"
              onChange={(event) => setInputValue(event.currentTarget.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSubmit}>
              Import
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImportCharactersDialog;
