"use server";
import { cookies } from "next/headers";
import { Character } from "../types/character";
import getCharacters from "./get-characters";

const removeCharacter = (character: Character) => {
  const characters = getCharacters();

  cookies().set(
    "characters",
    JSON.stringify(characters.filter((c) => c.id !== character.id)),
  );
};

export default removeCharacter;
