"use client";
import getCharacters from "./get-characters";

const removeCharacter = (characterId: string) => {
  const characters = getCharacters();

  localStorage.setItem(
    "characters",
    JSON.stringify(characters.filter((c) => c.id !== characterId)),
  );
  window.location.reload();
};

export default removeCharacter;
