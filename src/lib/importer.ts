import getCharacters from "../data-actions/get-characters";
import importCharacterData from "../data-actions/import-character-data";
import { toast } from "../hooks/use-toast";
import { Character, decodeCharacters, Party } from "../types/character";

export const encodeData = (data: unknown): string => {
  return btoa(JSON.stringify(data));
};

export const exportPartiesAndCharacters = (
  parties: Party[],
  characters: Character[],
) => {
  const encodedString = encodeData({ parties, characters });
  navigator.clipboard.writeText(encodedString);
  toast({
    title: "Export string copied to the clipboard!",
  });
};

export const exportCharacters = (characters: Character[]) => {
  const encodedString = encodeData(characters);
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
  const importedCharacters = decodeCharacters(data);
  importedCharacters.forEach((importedCharacter) => {
    const index = characters.findIndex(
      (character) =>
        character.id === importedCharacter.id ||
        character.characterName === importedCharacter.characterName,
    );
    if (index === -1) {
      characters.push(importedCharacter);
    } else {
      characters[index] = importedCharacter;
    }
  });
  importCharacterData(characters);
  toast({
    title: "Characters imported successfully!",
  });
};
