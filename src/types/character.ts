export type CharacterSpec = {
  specName: "Tank" | "Dps" | "Healer";
};

export type CharacterClass = {
  className: string;
  armorType: "Cloth" | "Leather" | "Mail" | "Plate";
  allowedSpecs: CharacterSpec[];
};

export type KeystoneName =
  | "SoB"
  | "Ara"
  | "COT"
  | "GB"
  | "MIST"
  | "DB"
  | "NW"
  | "SV";

type MythicKeystone = {
  name: KeystoneName;
  level: number;
};

export type Character = {
  characterName: string;
  characterClass: CharacterClass;
  specs: CharacterSpec[];
  discordTag: string;
  key: MythicKeystone;
};
