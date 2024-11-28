"use client";

import { CHARACTER_COOKIES_KEY } from "../lib/cookies-keys";
import { Character } from "../types/character";

const importCharacterData = (characters: Character[]) => {
  localStorage.setItem(CHARACTER_COOKIES_KEY, JSON.stringify(characters));
  window.location.reload();
};

export default importCharacterData;
