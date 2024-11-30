"use client";
import React from "react";
import { Template } from "../types/app-types";
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
  template?: Template;
};

const defaultTemplate = (): Template => ({
  id: "",
  name: "",
  template: "",
});

const CharacterDialog = (props: Props) => {
  const { children, template } = props;
  const [templateToEdit, setTemplateToEdit] = React.useState<string>(
    template || defaultTemplate(),
  );

  const handleSubmit = () => {
    // TODO
  };

  return (
    <Dialog
      onOpenChange={(open) => (open ? setTemplateToEdit(template || "") : null)}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new message template</DialogTitle>
          <DialogDescription>
            Will be saved and then able to be used in your party creation.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Template name</Label>
            <Input
              id="character-name"
              className="col-span-3"
              onChange={(event) =>
                setCharacterToEdit({
                  ...characterToEdit,
                  characterName: event.currentTarget.value,
                })
              }
              defaultValue={characterToEdit.characterName}
            />
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Template name</Label>
            <Input
              id="character-name"
              className="col-span-3"
              onChange={(event) =>
                setCharacterToEdit({
                  ...characterToEdit,
                  characterName: event.currentTarget.value,
                })
              }
              defaultValue={characterToEdit.characterName}
            />
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Template name
            </Label>
            <Input
              id="character-name"
              className="col-span-3"
              onChange={(event) =>
                setCharacterToEdit({
                  ...characterToEdit,
                  characterName: event.currentTarget.value,
                })
              }
              defaultValue={characterToEdit.characterName}
            />
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Template name
            </Label>
            <Input
              id="character-name"
              className="col-span-3"
              onChange={(event) =>
                setCharacterToEdit({
                  ...characterToEdit,
                  characterName: event.currentTarget.value,
                })
              }
              defaultValue={characterToEdit.characterName}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSubmit}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CharacterDialog;
