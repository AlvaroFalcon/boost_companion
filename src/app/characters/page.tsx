"use server";

import getCharacters from "../../actions/get-characters";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Label } from "../../components/ui/label";

const CharactersPage = () => {
  const characters = getCharacters();
  return (
    <div
      className={"flex justify-center items-center bg-gray-500 h-screen w-full"}
    >
      {characters.map((character) => (
        <div
          className={"px-4 w-3/5 border-2 rounded bg-white"}
          key={character.characterName}
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
                <div className={"flex flex-col gap-2"}>
                  <Label>
                    Class: {character.characterClass.className}{" "}
                    {characters[0].specs
                      .map((charClass) => charClass.specName)
                      .join(",")}
                  </Label>
                  <Label>RIO: {character.rio}</Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};
export default CharactersPage;
