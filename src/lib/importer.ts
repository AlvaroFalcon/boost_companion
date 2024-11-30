import getCharacters from "../data-actions/get-characters";
import getParties from "../data-actions/get-parties";
import storeImportedCharacters from "../data-actions/store-imported-characters";
import storeImportedParties from "../data-actions/store-imported-parties";
import { toast } from "../hooks/use-toast";
import {
  AppTypes,
  decodeCharacters,
  decodeImportData,
  Party,
} from "../types/app-types";

export const encodeData = (data: unknown): string => {
  return btoa(JSON.stringify(data));
};

export const exportPartiesAndCharacters = (
  parties: Party[],
  characters: AppTypes[],
) => {
  const encodedString = encodeData({ parties, characters });
  navigator.clipboard.writeText(encodedString);
  toast({
    title: "Export string copied to the clipboard!",
  });
};

export const exportCharacters = (characters: AppTypes[]) => {
  const encodedString = encodeData(characters);
  navigator.clipboard.writeText(encodedString);
  toast({
    title: "Export string copied to the clipboard!",
  });
};

export const importPartiesAndCharacters = (data: string) => {
  const { parties, characters } = decodeImportData(data);
  importCharacters(characters);
  importParties(parties);
};

export const importCharacterData = (data: string) => {
  const importedCharacters = decodeCharacters(data);
  importCharacters(importedCharacters);
};

export const importParties = (importedParties: Party[]) => {
  const parties = getParties();
  importedParties.forEach((importedParty) => {
    const index = parties.findIndex(
      (party) =>
        party.id === importedParty.id ||
        party.partyName === importedParty.partyName,
    );
    if (index === -1) {
      parties.push(importedParty);
    } else {
      parties[index] = importedParty;
    }
  });
  storeImportedParties(parties);
  toast({
    title: "Parties imported successfully!",
  });
};

const importCharacters = (importedCharacters: AppTypes[]) => {
  const characters = getCharacters();
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
  storeImportedCharacters(characters);
  toast({
    title: "Characters imported successfully!",
  });
};
