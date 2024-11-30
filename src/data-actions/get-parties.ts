"use client";
import { PARTIES_COOKIES_KEY } from "../lib/cookies-keys";
import { Party } from "../types/app-types";

const getParties = (): Party[] => {
  const parties = localStorage.getItem(PARTIES_COOKIES_KEY);
  return parties ? JSON.parse(parties) : [];
};

export default getParties;
