"use client";
import { PARTIES_COOKIES_KEY } from "../lib/cookies-keys";
import { Party } from "../types/party";
import getParties from "./get-parties";

const addParty = (partyToAdd: Party) => {
  const parties = getParties();
  if (parties.find((party) => partyToAdd.partyName === party.partyName)) return;
  parties.push(partyToAdd);
  localStorage.setItem(PARTIES_COOKIES_KEY, JSON.stringify(parties));
  window.location.reload();
};

export default addParty;
