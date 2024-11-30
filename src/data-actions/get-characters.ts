"use client";
import { CHARACTER_COOKIES_KEY } from "../lib/cookies-keys";
import { AppTypes } from "../types/app-types";

const getCharacters = (): AppTypes[] => {
  const characters = localStorage.getItem(CHARACTER_COOKIES_KEY);
  return characters ? JSON.parse(characters) : [];
};

export default getCharacters;
