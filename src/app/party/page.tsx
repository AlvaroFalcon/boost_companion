"use server";

import getCharacters from "../../actions/get-characters";
import getParties from "../../actions/get-parties";
import PartyDialog from "../../components/party-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

const PartyPage = () => {
  const parties = getParties();
  const characters = getCharacters();
  return (
    <div className={"flex flex-col  bg-gray-500 h-screen w-full p-4 gap-4"}>
      {parties.map((party) => {
        const partyCharacters = characters.filter((character) =>
          party.partyMemberIds.includes(character.id),
        );
        return (
          <div className={"flex w-full gap-4"} key={party.id}>
            <div
              className={"px-4 w-3/5 border-2 rounded bg-white"}
              key={party.id}
            >
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className={"flex justify-between w-full"}>
                      <Label>{party.partyName}</Label>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className={"flex"}>
                      <div className={"flex flex-col gap-2"}>
                        {partyCharacters.map((character) => (
                          <Label key={character.id}>
                            {character.characterName} {character.key.name}+
                            {character.key.level}
                          </Label>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className={"flex gap-2"}>
              <PartyDialog party={party} characters={characters}>
                <Button variant={"outline"}>Edit</Button>
              </PartyDialog>
              <Button variant={"outline"}>Remove</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PartyPage;
