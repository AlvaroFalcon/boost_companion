"use client";
import React from "react";
import { Party } from "../types/party";
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
  const { children, party } = props;
  const [partyToEdit, setPartyToEdit] = React.useState<Party>(
    party || newParty,
  );

  const handleSubmit = () => {
    //TODO
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
          <DialogTitle>Add new partyr</DialogTitle>
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
          <div className="grid grid-cols-4 items-center gap-4">
            <div>scroll</div>
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
