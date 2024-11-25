import { CharacterClass, CharacterSpec } from "./character";
import {
  DeathKnight,
  DemonHunter,
  Druid,
  Evoker,
  Hunter,
  Mage,
  Monk,
  Paladin,
  Priest,
  Rogue,
  Shaman,
  Warlock,
  Warrior,
} from "./classes";

type ClassOption = {
  label: string;
  class: CharacterClass;
  allowedSpecs: CharacterSpec[];
};
export const ClassSelectOptions: ClassOption[] = [
  {
    label: "Paladin",
    class: Paladin,
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
  },
  {
    label: "Warrior",
    class: Warrior,
    allowedSpecs: [
      {
        specName: "Tank",
      },
      {
        specName: "Dps",
      },
    ],
  },
  {
    label: "Hunter",
    class: Hunter,
    allowedSpecs: [
      {
        specName: "Dps",
      },
    ],
  },
  {
    label: "Rogue",
    class: Rogue,
    allowedSpecs: [
      {
        specName: "Dps",
      },
    ],
  },
  {
    label: "Priest",
    class: Priest,
    allowedSpecs: [
      {
        specName: "Healer",
      },
      {
        specName: "Dps",
      },
    ],
  },
  {
    label: "DK",
    class: DeathKnight,
    allowedSpecs: [
      {
        specName: "Tank",
      },
      {
        specName: "Dps",
      },
    ],
  },
  {
    label: "Shaman",
    class: Shaman,
    allowedSpecs: [
      {
        specName: "Healer",
      },
      {
        specName: "Dps",
      },
    ],
  },
  {
    label: "Mage",
    class: Mage,
    allowedSpecs: [
      {
        specName: "Dps",
      },
    ],
  },
  {
    label: "Warlock",
    class: Warlock,
    allowedSpecs: [
      {
        specName: "Dps",
      },
    ],
  },
  {
    label: "Monk",
    class: Monk,
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
  },
  {
    label: "Druid",
    class: Druid,
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
  },
  {
    label: "DH",
    class: DemonHunter,
    allowedSpecs: [
      {
        specName: "Tank",
      },
      {
        specName: "Dps",
      },
    ],
  },
  {
    label: "Evoker",
    class: Evoker,
    allowedSpecs: [
      {
        specName: "Dps",
      },
      {
        specName: "Healer",
      },
    ],
  },
];
