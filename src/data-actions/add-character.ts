"use client";

import { CHARACTER_COOKIES_KEY } from "../lib/cookies-keys";
import { AppTypes } from "../types/app-types";
import getCharacters from "./get-characters";

const addCharacter = (characterToEdit: AppTypes) => {
  const characters = getCharacters();
  if (
    characters.find(
      (character) => character.characterName === characterToEdit.characterName,
    )
  )
    return;
  characters.push(characterToEdit);
  localStorage.setItem(CHARACTER_COOKIES_KEY, JSON.stringify(characters));
  window.location.reload();
};

export default addCharacter;
