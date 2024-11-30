"use client";

import { AppTypes } from "../types/app-types";
import { CHARACTER_COOKIES_KEY } from "../lib/cookies-keys";
import getCharacters from "./get-characters";

const editCharacter = (characterToEdit: AppTypes) => {
  const characters = getCharacters();
  const index = characters.findIndex(
    (character) => character.id === characterToEdit.id,
  );
  if (index === -1) return;
  characters[index] = characterToEdit;
  localStorage.setItem(CHARACTER_COOKIES_KEY, JSON.stringify(characters));
  window.location.reload();
};

export default editCharacter;
