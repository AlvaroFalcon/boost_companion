export type CharacterSpec = {
  specName: "Tank" | "Dps" | "Healer";
};

export type CharacterClass = {
  className: string;
  armorType: "Cloth" | "Leather" | "Mail" | "Plate";
};

type MythicKeystone = {
  name: "SoB" | "Ara" | "COT" | "GB" | "MIST" | "DB" | "NW" | "SV";
  level: number;
};

type Character = {
  characterName: string;
  characterClass: CharacterClass;
  specs: CharacterSpec[];
  discordTag: string;
  key: MythicKeystone;
};
