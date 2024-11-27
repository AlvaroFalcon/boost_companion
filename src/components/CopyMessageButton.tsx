"use client";

import { toast } from "../hooks/use-toast";
import { buildPartyMessage } from "../lib/utils";
import { Character } from "../types/character";
import { Party } from "../types/party";
import { Button } from "./ui/button";

type Props = {
  party: Party;
  characters: Character[];
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
    <Button variant={"outline"} onClick={() => handleCopyMessage(party)}>
      Copy message
    </Button>
  );
};

export default CopyMessageButton;
