import { CharacterClass } from "./character";
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
};

export const ClassSelectOptions: ClassOption[] = [
  {
    label: "Paladin",
    class: Paladin,
  },
  {
    label: "Warrior",
    class: Warrior,
  },
  {
    label: "Hunter",
    class: Hunter,
  },
  {
    label: "Rogue",
    class: Rogue,
  },
  {
    label: "Priest",
    class: Priest,
  },
  {
    label: "DK",
    class: DeathKnight,
  },
  {
    label: "Shaman",
    class: Shaman,
  },
  {
    label: "Mage",
    class: Mage,
  },
  {
    label: "Warlock",
    class: Warlock,
  },
  {
    label: "Monk",
    class: Monk,
  },
  {
    label: "Druid",
    class: Druid,
  },
  {
    label: "DH",
    class: DemonHunter,
  },
  {
    label: "Evoker",
    class: Evoker,
  },
];
