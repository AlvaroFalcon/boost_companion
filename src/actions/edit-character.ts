"use server";

import { Character } from "@/types/character";
import { cookies } from "next/headers";
import { CHARACTER_COOKIES_KEY } from "../lib/cookies-keys";
import getCharacters from "./get-characters";

const editCharacter = (characterToEdit: Character) => {
  const characters = getCharacters();
  const index = characters.findIndex(
    (character) => character.id === characterToEdit.id,
  );
  if (index === -1) return;
  characters[index] = characterToEdit;
  cookies().set(CHARACTER_COOKIES_KEY, JSON.stringify(characters));
};

export default editCharacter;
