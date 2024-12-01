import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { AppTypes, CharacterSpec, Party } from "../types/app-types";
import { Nova } from "../types/default-templates";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const signAmountTemplate = (amount: number) => {
  switch (amount) {
    case 1:
      return "";
    case 2:
      return "Duo";
    case 3:
      return "Trio";
    case 4:
      return "Quad";
    default:
      throw new Error("Invalid amount of members in party");
  }
};

const getProperSpecIcon = (spec: CharacterSpec) => {
  switch (spec.specName) {
    case "Tank":
      return ":tank_nova:";
    case "Healer":
      return ":healer_nova:";
    case "Dps":
      return ":dps_nova:";
    default:
      throw new Error("Invalid spec name");
  }
};
const getAllSpecIcons = (specs: CharacterSpec[]) => {
  return specs.map((spec) => getProperSpecIcon(spec)).join(" ");
};

const messageSignTemplate = "$amount_take \n";
const defaultTemplate = Nova.template;

export const buildPartyMessage = (party: Party, characters: AppTypes[]) => {
  let message = "";
  const template = party.template?.template || Nova.template;
  const partyCharacters = characters.filter((character) =>
    party.partyMemberIds.includes(character.id),
  );
  const charactersPerDiscordTag = partyCharacters.reduce(
    (acc, character) => {
      if (!acc[character.discordTag]) {
        acc[character.discordTag] = [];
      }
      acc[character.discordTag].push(character);
      return acc;
    },
    {} as Record<string, AppTypes[]>,
  );
  const discordTags = Object.keys(charactersPerDiscordTag);
  message = message.concat(
    messageSignTemplate.replace(
      "$amount_take",
      signAmountTemplate(discordTags.length),
    ),
  );

  discordTags.forEach((discordTag) => {
    const characters = charactersPerDiscordTag[discordTag];
    if (characters.length > 1 && discordTags.length > 1)
      message = message.concat(`${discordTag}: \n`);
    characters.forEach((character, index) => {
      if (index !== 0) {
        message = message.concat("OR\n");
      }
      message = message.concat(
        template
          .replace("$class_icon", getAllSpecIcons(character.specs))
          .replace(
            "$roles",
            character.specs.map((spec) => spec.specName).join("/"),
          )
          .replace("$class", character.characterClass.className)
          .replace("$rio", character.rio)
          .replace("$key", `${character.key.name}+${character.key.level}`),
      );
      if (characters.length === 1 && discordTags.length > 1)
        message = message.concat(`${discordTag}`);
      message.concat("\n");
    });
  });
  return message;
};
