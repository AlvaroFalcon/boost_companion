"use server";
import { cookies } from "next/headers";
import { PARTIES_COOKIES_KEY } from "../lib/cookies-keys";
import { Party } from "../types/party";
import getParties from "./get-parties";

const editParty = (party: Party) => {
  const parties = getParties();
  const index = parties.findIndex((p) => p.id === party.id);
  if (index === -1) return;
  parties[index] = party;
  cookies().set(PARTIES_COOKIES_KEY, JSON.stringify(parties));
};

export default editParty;
