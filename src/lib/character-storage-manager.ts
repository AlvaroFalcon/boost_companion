"use client";
import { Character } from "../types/character";
const LOCALSTORAGE_KEY = "characters";

export const getCharacters = (): Character[] => {
  if (typeof window === "undefined") return [];
  const characters = localStorage.getItem(LOCALSTORAGE_KEY);
  return characters ? JSON.parse(characters) : [];
};

export const addCharacter = (character: Character) => {
  if (typeof window === "undefined") return;
  console.log("added");
  const characters = getCharacters();
  characters.push(character);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(characters));
};

export const editCharacter = (character: Character) => {
  if (typeof window === "undefined") return;
  const characters = getCharacters();
  const index = characters.findIndex(
    (c) => c.characterName === character.characterName,
  );
  characters[index] = character;
  // TODO: update parties wherever this character is
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(characters));
};

export const deleteCharacter = (character: Character) => {
  if (typeof window === "undefined") return;
  const characters = getCharacters();
  const index = characters.findIndex(
    (c) => c.characterName === character.characterName,
  );
  characters.splice(index, 1);
  // TODO: need to remove from parties, whenever it exists
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(characters));
};
