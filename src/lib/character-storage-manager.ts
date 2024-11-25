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
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(characters));
};

export const deleteCharacter = async (character: Character) => {
  const characters = getCharacters();
  const index = characters.findIndex(
    (c) => c.characterName === character.characterName,
  );
  characters.splice(index, 1);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(characters));
};
