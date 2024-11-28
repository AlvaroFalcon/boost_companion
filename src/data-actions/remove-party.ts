"use client";
import { PARTIES_COOKIES_KEY } from "../lib/cookies-keys";
import getParties from "./get-parties";

const removeParty = (partyId: string) => {
  const parties = getParties();
  const newParties = parties.filter((party) => party.id !== partyId);
  localStorage.setItem(PARTIES_COOKIES_KEY, JSON.stringify(newParties));
  window.location.reload();
};
