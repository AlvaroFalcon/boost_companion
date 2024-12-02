"use client";

import { CHARACTER_COOKIES_KEY } from "../lib/cookies-keys";
import { Character } from "../types/app-types";

const storeImportedCharacters = (characters: Character[]) => {
  localStorage.setItem(CHARACTER_COOKIES_KEY, JSON.stringify(characters));
  window.location.reload();
};

export default storeImportedCharacters;
