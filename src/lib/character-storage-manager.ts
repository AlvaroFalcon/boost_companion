import { Character } from "../types/character";
const LOCALSTORAGE_KEY = "characters";

export const getCharacters = (): Character[] => {
  const characters = localStorage.getItem(LOCALSTORAGE_KEY);
  return characters ? JSON.parse(characters) : [];
};

export const addCharacter = async (character: Character) => {
  const characters = getCharacters();
  characters.push(character);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(characters));
};

export const editCharacter = async (character: Character) => {
  const characters = getCharacters();
  const index = characters.findIndex(
    (c) => c.characterName === character.characterName,
  );
  characters[index] = character;
  // TODO: update parties wherever this character is
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(characters));
};

export const deleteCharacter = async (character: Character) => {
  const characters = getCharacters();
  const index = characters.findIndex(
    (c) => c.characterName === character.characterName,
  );
  characters.splice(index, 1);
  // TODO: need to remove from parties, whenever it exists
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(characters));
};
