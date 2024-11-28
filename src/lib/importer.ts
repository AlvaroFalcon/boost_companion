import getCharacters from "../data-actions/get-characters";
import importCharacterData from "../data-actions/import-character-data";
import { toast } from "../hooks/use-toast";
import { Character, Party } from "../types/character";

export const encodeData = (data: string): string => {
  return btoa(JSON.stringify(data));
};

export const decodeCharacters = (data: string): Character[] => {
  return JSON.parse(atob(data)) as Character[];
};

export const exportPartiesAndCharacters = (
  parties: Party[],
  characters: Character[],
) => {
  const encodedString = encodeData(JSON.stringify({ parties, characters }));
  navigator.clipboard.writeText(encodedString);
  toast({
    title: "Export string copied to the clipboard!",
  });
};

export const exportCharacters = (characters: Character[]) => {
  const encodedString = encodeData(JSON.stringify(characters));
  navigator.clipboard.writeText(encodedString);
  toast({
    title: "Export string copied to the clipboard!",
  });
};

export const decodePartiesAndCharacters = (
  data: string,
): { parties: Party[]; characters: Character[] } => {
  const decodedData = JSON.parse(atob(data));
  return {
    parties: decodedData.parties,
    characters: decodedData.characters,
  };
};

export const importPartiesAndCharacters = (data: string) => {
  //todo
};

export const importCharacters = (data: string) => {
  const characters = getCharacters();
  console.log("data", data);
  const importedCharacters = decodeCharacters(data);
  console.log(importedCharacters[0], "importedCharacters");
  /*  const newCharacters = characters.map((character) => {
    const importedCharacter = importedCharacters.find(
      (c) =>
        c.characterName === character.characterName || c.id === character.id,
    );
    return importedCharacter ? importedCharacter : character;
  });
  console.log(newCharacters, "newCharacters");
  importCharacterData(newCharacters);*/
};
