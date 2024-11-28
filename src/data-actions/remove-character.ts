"use client";
import {
  CHARACTER_COOKIES_KEY,
  PARTIES_COOKIES_KEY,
} from "../lib/cookies-keys";
import getCharacters from "./get-characters";
import getParties from "./get-parties";

const removeCharacter = (characterId: string) => {
  const characters = getCharacters();
  const parties = getParties();
  localStorage.setItem(
    CHARACTER_COOKIES_KEY,
    JSON.stringify(characters.filter((c) => c.id !== characterId)),
  );

  parties.forEach((party) => {
    party.partyMemberIds = party.partyMemberIds.filter(
      (c) => c !== characterId,
    );
  });

  localStorage.setItem(PARTIES_COOKIES_KEY, JSON.stringify(parties));

  window.location.reload();
};

export default removeCharacter;
