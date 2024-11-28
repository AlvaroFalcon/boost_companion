"use client";

import { useEffect, useState } from "react";
import DeletePartyConfirmDialog from "../../components/delete-party-confirm-dialog";
import getCharacters from "../../data-actions/get-characters";
import getParties from "../../data-actions/get-parties";
import PartyDialog from "../../components/party-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Character } from "../../types/character";
import { Party } from "../../types/party";

const PartyPage = () => {
  const [parties, setParties] = useState<Party[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    setParties(getParties());
    setCharacters(getCharacters());
  }, []);

  return (
    <div className={"flex flex-col bg-pagebg  h-screen w-full p-4 gap-4"}>
      {parties.map((party) => {
        const partyCharacters = characters.filter((character) =>
          party.partyMemberIds.includes(character.id),
        );
        return (
          <div className={"flex w-full gap-4"} key={party.id}>
            <div
              className={"px-4 w-3/5 border-2 rounded bg-background"}
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
              <DeletePartyConfirmDialog partyId={party.id}>
                <Button variant={"outline"}>Remove</Button>
              </DeletePartyConfirmDialog>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PartyPage;
