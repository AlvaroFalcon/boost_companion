import { CharacterClass, Template } from "./app-types";
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
import { Nova, Oblivion } from "./default-templates";

type TemplateOption = {
  label: string;
  template: Template;
};

export const TemplateSelectOptions: TemplateOption[] = [
  {
    label: "Nova",
    template: Nova,
  },
  {
    label: "Oblivion",
    template: Oblivion,
  },
];
