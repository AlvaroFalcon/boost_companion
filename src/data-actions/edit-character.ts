"use client";

import { Character } from "@/types/character";
import { CHARACTER_COOKIES_KEY } from "../lib/cookies-keys";
import getCharacters from "./get-characters";

const editCharacter = (characterToEdit: Character) => {
  const characters = getCharacters();
  const index = characters.findIndex(
    (character) => character.id === characterToEdit.id,
  );
  if (index === -1) return;
  characters[index] = characterToEdit;
  localStorage.setItem(CHARACTER_COOKIES_KEY, JSON.stringify(characters));
};

export default editCharacter;
