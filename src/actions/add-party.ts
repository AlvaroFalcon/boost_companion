"use server";
import { cookies } from "next/headers";
import { PARTIES_COOKIES_KEY } from "../lib/cookies-keys";
import { Party } from "../types/party";
import getParties from "./get-parties";

const addParty = (partyToAdd: Party) => {
  const parties = getParties();
  if (parties.find((party) => partyToAdd.partyName === party.partyName)) return;
  parties.push(partyToAdd);
  cookies().set(PARTIES_COOKIES_KEY, JSON.stringify(parties));
};

export default addParty;
