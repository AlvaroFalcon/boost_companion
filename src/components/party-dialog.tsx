"use client";
import React from "react";
import addParty from "../data-actions/add-party";
import editParty from "../data-actions/edit-party";
import { Character, Party } from "../types/app-types";
import { TemplateSelectOptions } from "../types/template-select-options";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

type Props = {
  children: React.ReactNode;
  characters: Character[];
  party?: Party;
};

const newParty = (): Party => {
  return {
    id: Date.now().toString(),
    partyName: "",
    partyMemberIds: [],
  };
};

const PartyDialog = (props: Props) => {
  const { children, party, characters } = props;
  const [partyToEdit, setPartyToEdit] = React.useState<Party>(
    party || newParty,
  );

  const handleSubmit = () => {
    if (party) {
      editParty(partyToEdit);
      return;
    }
    addParty(partyToEdit);
  };

  const handleTemplateChange = (value: string) => {
    const template = TemplateSelectOptions.find(
      (option) => option.template.name === value,
    );
    setPartyToEdit({
      ...partyToEdit,
      template: template?.template,
    });
  };

  const handleToggle = (value: string[]) => {
    setPartyToEdit({
      ...partyToEdit,
      partyMemberIds: value,
    });
  };

  return (
    <Dialog
      onOpenChange={(open) =>
        open ? setPartyToEdit(party || newParty()) : null
      }
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new party</DialogTitle>
          <DialogDescription>
            Put together all your characters to create a party
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="party-name" className="text-right">
              Party name
            </Label>
            <Input
              id="character-name"
              className="col-span-3"
              onChange={(event) =>
                setPartyToEdit({
                  ...partyToEdit,
                  partyName: event.currentTarget.value,
                })
              }
              defaultValue={partyToEdit.partyName}
            />
          </div>
          <div className="grid gap-4 py-4">
            <Select
              defaultValue={partyToEdit.template?.name || "Nova"}
              onValueChange={handleTemplateChange}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TemplateSelectOptions.map((option) => (
                  <SelectItem key={option.label} value={option.template.name}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className={"w-full"}>
            <ToggleGroup
              type={"multiple"}
              defaultValue={partyToEdit.partyMemberIds}
              onValueChange={(value) => handleToggle(value)}
              className={"flex flex-col w-full border-2 rounded p-4"}
            >
              {characters.map((character) => (
                <ToggleGroupItem
                  variant={"outline"}
                  key={character.id}
                  value={character.id}
                  className={"p-4 border-b-2 w-full"}
                >
                  {character.characterName}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
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

export default PartyDialog;
