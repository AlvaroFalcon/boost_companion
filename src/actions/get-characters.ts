"use server";
import { cookies } from "next/headers";
import { CHARACTER_COOKIES_KEY } from "../lib/cookies-keys";
import { Character } from "../types/character";

const getCharacters = (): Character[] => {
  const characters = cookies().get(CHARACTER_COOKIES_KEY)?.value;
  return characters ? JSON.parse(characters) : [];
};

export default getCharacters;
