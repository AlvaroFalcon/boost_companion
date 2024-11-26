"use server";

import getCharacters from "../../actions/get-characters";
import CharacterDialog from "../../components/character-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

const CharactersPage = () => {
  const characters = getCharacters();
  return (
    <div className={"flex flex-col  bg-gray-500 h-screen w-full p-4 gap-4"}>
      {characters.map((character) => (
        <div className={"flex w-full gap-4"} key={character.id}>
          <div
            className={"px-4 w-3/5 border-2 rounded bg-white"}
            key={character.id}
          >
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className={"flex justify-between w-full"}>
                    <Label>
                      {character.characterName} {character.key.name}+
                      {character.key.level}
                    </Label>
                    <Label>{character.discordTag}</Label>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className={"flex"}>
                    <div className={"flex flex-col gap-2"}>
                      <Label>
                        Class: {character.characterClass.className}{" "}
                        {characters[0].specs
                          .map((charClass) => charClass.specName)
                          .join(",")}
                      </Label>
                      <Label>RIO: {character.rio}</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className={"flex gap-2"}>
            <CharacterDialog character={character}>
              <Button variant={"outline"}>Edit</Button>
            </CharacterDialog>
            <Button variant={"outline"}>Remove</Button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CharactersPage;
