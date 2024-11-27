"use client";

import { toast } from "../hooks/use-toast";
import { Party } from "../types/party";
import { Button } from "./ui/button";

type Props = {
  party: Party;
};
const CopyMessageButton = (props: Props) => {
  const { party } = props;
  const handleCopyMessage = (party: Party) => {
    navigator.clipboard.writeText(`Party message`);
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
