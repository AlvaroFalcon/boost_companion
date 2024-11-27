"use server";
import { cookies } from "next/headers";
import { PARTIES_COOKIES_KEY } from "../lib/cookies-keys";
import getParties from "./get-parties";

const removeParty = (partyId: string) => {
  const parties = getParties();
  const newParties = parties.filter((party) => party.id !== partyId);
  cookies().set(PARTIES_COOKIES_KEY, JSON.stringify(newParties));
};
