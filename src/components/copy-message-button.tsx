"use client";

import { ClipboardCopyIcon } from "lucide-react";
import { toast } from "../hooks/use-toast";
import { buildPartyMessage } from "../lib/utils";
import { AppTypes, Party } from "../types/app-types";
import { Button } from "./ui/button";

type Props = {
  party: Party;
  characters: AppTypes[];
};
const CopyMessageButton = (props: Props) => {
  const { party, characters } = props;
  const handleCopyMessage = (party: Party) => {
    const message = buildPartyMessage(party, characters);
    navigator.clipboard.writeText(message);
    toast({
      title: "Message copied to the clipboard!",
    });
  };
  return (
    <Button
      variant={"outline"}
      onClick={() => handleCopyMessage(party)}
      disabled={party.partyMemberIds.length === 0}
    >
      <ClipboardCopyIcon />
    </Button>
  );
};

export default CopyMessageButton;
