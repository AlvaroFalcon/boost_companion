"use server";
import { cookies } from "next/headers";
import { CHARACTER_COOKIES_KEY } from "../lib/cookies-keys";
import { Character } from "../types/character";
import getCharacters from "./get-characters";

const addCharacter = (characterToEdit: Character) => {
  const characters = getCharacters();
  if (
    characters.find(
      (character) => character.characterName === characterToEdit.characterName,
    )
  )
    return;
  characters.push(characterToEdit);
  cookies().set(CHARACTER_COOKIES_KEY, JSON.stringify(characters));
};

export default addCharacter;
