"use client";
import React from "react";
import addCharacter from "../data-actions/add-character";
import editCharacter from "../data-actions/edit-character";
import { Character, CharacterSpec, KeystoneName } from "../types/app-types";
import { ClassSelectOptions } from "../types/class-select-options";
import { getClassByName, Paladin } from "../types/classes";
import { KeystoneSelectOptions } from "../types/keystone-select-options";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
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

type Props = {
  children: React.ReactNode;
  character?: Character;
};

const newCharacter = (): Character => {
  return {
    id: Date.now().toString(),
    characterName: "",
    rio: "0",
    characterClass: Paladin,
    specs: [],
    discordTag: "",
    key: {
      name: "SoB",
      level: 2,
    },
  };
};

const hasAllowedSpec = (character: Character, specName: string) => {
  return character.characterClass.allowedSpecs.some(
    (spec) => spec.specName === specName,
  );
};

const hasSpecSelected = (character: Character, specName: string): boolean => {
  return character.specs.some((spec) => spec.specName === specName);
};

const CharacterDialog = (props: Props) => {
  const { children, character } = props;
  const [characterToEdit, setCharacterToEdit] = React.useState<Character>(
    character || newCharacter,
  );

  const handleClassChange = (className: string) => {
    const characterClass = getClassByName(className);
    setCharacterToEdit({
      ...characterToEdit,
      characterClass,
      specs: [],
    });
  };

  const handleKeystoneChange = (keystoneName: KeystoneName) => {
    setCharacterToEdit({
      ...characterToEdit,
      key: {
        name: keystoneName,
        level: characterToEdit.key.level,
      },
    });
  };

  const handleSpecSelect = (specName: "Tank" | "Healer" | "Dps") => {
    const spec: CharacterSpec = { specName };
    if (hasSpecSelected(characterToEdit, specName)) {
      setCharacterToEdit({
        ...characterToEdit,
        specs: characterToEdit.specs.filter(
          (spec) => spec.specName !== specName,
        ),
      });
    } else {
      setCharacterToEdit({
        ...characterToEdit,
        specs: [...characterToEdit.specs, spec],
      });
    }
  };

  const handleSubmit = () => {
    if (character) {
      editCharacter(characterToEdit);
      return;
    }
    addCharacter(characterToEdit);
  };

  return (
    <Dialog
      onOpenChange={(open) =>
        open ? setCharacterToEdit(character || newCharacter()) : null
      }
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new character</DialogTitle>
          <DialogDescription>
            Will be saved and then able to be used in your party creation.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Character name
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              RIO
            </Label>
            <Input
              id="rio"
              className="col-span-3"
              onChange={(event) =>
                setCharacterToEdit({
                  ...characterToEdit,
                  rio: event.currentTarget.value,
                })
              }
              defaultValue={characterToEdit.rio}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Discord tag
            </Label>
            <Input
              id="discord-tag"
              className="col-span-3"
              onChange={(event) =>
                setCharacterToEdit({
                  ...characterToEdit,
                  discordTag: event.currentTarget.value,
                })
              }
              defaultValue={characterToEdit.discordTag}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Select
              defaultValue={characterToEdit.characterClass.className}
              onValueChange={handleClassChange}
            >
              <SelectTrigger>
                <SelectValue placeholder={"Class"} />
              </SelectTrigger>
              <SelectContent>
                {ClassSelectOptions.map((option) => (
                  <SelectItem key={option.label} value={option.class.className}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div>
              <span className={"flex items-center gap-2"}>
                <Label>TANK</Label>{" "}
                <Checkbox
                  checked={hasSpecSelected(characterToEdit, "Tank")}
                  id="tank-checkbox"
                  onCheckedChange={() => {
                    handleSpecSelect("Tank");
                  }}
                  disabled={!hasAllowedSpec(characterToEdit, "Tank")}
                />
              </span>
            </div>
            <div>
              <span className={"flex items-center gap-2"}>
                <Label>HEAL</Label>{" "}
                <Checkbox
                  checked={hasSpecSelected(characterToEdit, "Healer")}
                  id="heal-checkbox"
                  disabled={!hasAllowedSpec(characterToEdit, "Healer")}
                  onCheckedChange={() => {
                    handleSpecSelect("Healer");
                  }}
                />
              </span>
            </div>
            <div>
              <span className={"flex items-center gap-2"}>
                <Label>DPS</Label>{" "}
                <Checkbox
                  checked={hasSpecSelected(characterToEdit, "Dps")}
                  id="dps-checkbox"
                  disabled={!hasAllowedSpec(characterToEdit, "Dps")}
                  onCheckedChange={() => {
                    handleSpecSelect("Dps");
                  }}
                />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Keystone
            </Label>
            <Select
              defaultValue={characterToEdit.key.name}
              onValueChange={handleKeystoneChange}
            >
              <SelectTrigger>
                <SelectValue placeholder={"Keystone"} />
              </SelectTrigger>
              <SelectContent>
                {KeystoneSelectOptions.map((option) => (
                  <SelectItem key={option.label} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type={"number"}
              id="keystone-level"
              className="col-span-2"
              onChange={(event) =>
                setCharacterToEdit({
                  ...characterToEdit,
                  key: {
                    name: characterToEdit.key.name,
                    level: parseInt(event.currentTarget.value),
                  },
                })
              }
              defaultValue={characterToEdit.key.level}
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
