import { Plus } from "lucide-react";
import React from "react";
import { ClassSelectOptions } from "../types/class-select-options";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Dialog,
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
};

const CharacterDialog = (props: Props) => {
  const { children } = props;
  return (
    <Dialog>
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
            <Label htmlFor="name" className="text-right">
              Character name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Discord tag
            </Label>
            <Input id="discord-tag" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={"Class"} />
              </SelectTrigger>
              <SelectContent>
                {ClassSelectOptions.map((option, index) => (
                  <SelectItem key={option.label} value={index.toString()}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div>
              <span className={"flex items-center gap-2"}>
                <Label>TANK</Label> <Checkbox id="dps-checkbox" />
              </span>
            </div>
            <div>
              <span className={"flex items-center gap-2"}>
                <Label>HEAL</Label> <Checkbox id="dps-checkbox" />
              </span>
            </div>
            <div>
              <span className={"flex items-center gap-2"}>
                <Label>DPS</Label> <Checkbox id="dps-checkbox" />
              </span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CharacterDialog;
