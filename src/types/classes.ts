import { CharacterClass } from "./app-types";

export const Paladin: CharacterClass = {
  className: "Paladin",
  armorType: "Plate",
  allowedSpecs: [
    {
      specName: "Tank",
    },
    {
      specName: "Dps",
    },
    {
      specName: "Healer",
    },
  ],
};

export const Warrior: CharacterClass = {
  className: "Warrior",
  armorType: "Plate",
  allowedSpecs: [
    {
      specName: "Tank",
    },
    {
      specName: "Dps",
    },
  ],
};

export const Hunter: CharacterClass = {
  className: "Hunter",
  armorType: "Mail",
  allowedSpecs: [
    {
      specName: "Dps",
    },
  ],
};

export const Rogue: CharacterClass = {
  className: "Rogue",
  armorType: "Leather",
  allowedSpecs: [
    {
      specName: "Dps",
    },
  ],
};

export const Priest: CharacterClass = {
  className: "Priest",
  armorType: "Cloth",
  allowedSpecs: [
    {
      specName: "Healer",
    },
    {
      specName: "Dps",
    },
  ],
};

export const DeathKnight: CharacterClass = {
  className: "Death Knight",
  armorType: "Plate",
  allowedSpecs: [
    {
      specName: "Tank",
    },
    {
      specName: "Dps",
    },
  ],
};

export const Shaman: CharacterClass = {
  className: "Shaman",
  armorType: "Mail",
  allowedSpecs: [
    {
      specName: "Healer",
    },
    {
      specName: "Dps",
    },
  ],
};

export const Mage: CharacterClass = {
  className: "Mage",
  armorType: "Cloth",
  allowedSpecs: [
    {
      specName: "Dps",
    },
  ],
};

export const Warlock: CharacterClass = {
  className: "Warlock",
  armorType: "Cloth",
  allowedSpecs: [
    {
      specName: "Dps",
    },
  ],
};

export const Monk: CharacterClass = {
  className: "Monk",
  armorType: "Leather",
  allowedSpecs: [
    {
      specName: "Tank",
    },
    {
      specName: "Healer",
    },
    {
      specName: "Dps",
    },
  ],
};

export const Druid: CharacterClass = {
  className: "Druid",
  armorType: "Leather",
  allowedSpecs: [
    {
      specName: "Tank",
    },
    {
      specName: "Healer",
    },
    {
      specName: "Dps",
    },
  ],
};

export const DemonHunter: CharacterClass = {
  className: "Demon Hunter",
  armorType: "Leather",
  allowedSpecs: [
    {
      specName: "Tank",
    },
    {
      specName: "Dps",
    },
  ],
};

export const Evoker: CharacterClass = {
  className: "Evoker",
  armorType: "Mail",
  allowedSpecs: [
    {
      specName: "Dps",
    },
    {
      specName: "Healer",
    },
  ],
};

export const getClassByName = (className: string): CharacterClass => {
  switch (className) {
    case "Paladin":
      return Paladin;
    case "Warrior":
      return Warrior;
    case "Hunter":
      return Hunter;
    case "Rogue":
      return Rogue;
    case "Priest":
      return Priest;
    case "Death Knight":
      return DeathKnight;
    case "Shaman":
      return Shaman;
    case "Mage":
      return Mage;
    case "Warlock":
      return Warlock;
    case "Monk":
      return Monk;
    case "Druid":
      return Druid;
    case "Demon Hunter":
      return DemonHunter;
    case "Evoker":
      return Evoker;
    default:
      throw new Error(`Unknown class: ${className}`);
  }
};
