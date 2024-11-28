"use client";
import { Character } from "../types/character";
import getCharacters from "./get-characters";

const removeCharacter = (character: Character) => {
  const characters = getCharacters();

  localStorage.setItem(
    "characters",
    JSON.stringify(characters.filter((c) => c.id !== character.id)),
  );
  window.location.reload();
};

export default removeCharacter;
