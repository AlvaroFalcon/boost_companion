"use client";

import { PARTIES_COOKIES_KEY } from "../lib/cookies-keys";
import { Party } from "../types/app-types";

const storeImportedCharacters = (parties: Party[]) => {
  localStorage.setItem(PARTIES_COOKIES_KEY, JSON.stringify(parties));
  window.location.reload();
};

export default storeImportedCharacters;
