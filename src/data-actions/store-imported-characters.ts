"use client";

import { CHARACTER_COOKIES_KEY } from "../lib/cookies-keys";
import { AppTypes } from "../types/app-types";

const storeImportedCharacters = (characters: AppTypes[]) => {
  localStorage.setItem(CHARACTER_COOKIES_KEY, JSON.stringify(characters));
  window.location.reload();
};

export default storeImportedCharacters;
