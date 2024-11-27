"use server";
import { cookies } from "next/headers";
import { PARTIES_COOKIES_KEY } from "../lib/cookies-keys";
import { Party } from "../types/party";

const getParties = (): Party[] => {
  const parties = cookies().get(PARTIES_COOKIES_KEY)?.value;
  return parties ? JSON.parse(parties) : [];
};

export default getParties;
