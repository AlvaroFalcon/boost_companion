import { z } from "zod";

const KeystoneNameSchema = z.enum([
  "SoB",
  "Ara",
  "COT",
  "GB",
  "MIST",
  "DB",
  "NW",
  "SV",
]);

const CharacterSpecSchema = z.object({
  specName: z.enum(["Tank", "Dps", "Healer"]),
});

const CharacterClassSchema = z.object({
  className: z.string(),
  armorType: z.enum(["Cloth", "Leather", "Mail", "Plate"]),
  allowedSpecs: z.array(CharacterSpecSchema),
});

const MythicKeystoneSchema = z.object({
  name: KeystoneNameSchema,
  level: z.number().int().nonnegative(),
});

const CharacterSchema = z.object({
  id: z.string(),
  rio: z.string(),
  characterName: z.string(),
  characterClass: CharacterClassSchema,
  specs: z.array(CharacterSpecSchema),
  discordTag: z.string(),
  key: MythicKeystoneSchema,
});

const TemplateSchema = z.object({
  id: z.string(),
  name: z.string(),
  tankIcon: z.string(),
  healerIcon: z.string(),
  dpsIcon: z.string(),
  keyIcon: z.string(),
  template: z.string(),
});

const PartySchema = z.object({
  id: z.string(),
  partyName: z.string(),
  partyMemberIds: z.array(z.string()),
  template: TemplateSchema.optional(),
});

const ImportDataSchema = z.object({
  parties: z.array(PartySchema),
  characters: z.array(CharacterSchema),
});

const PartiesSchema = z.array(PartySchema);
const CharactersSchema = z.array(CharacterSchema);
const TemplatesSchema = z.array(TemplateSchema);

export type KeystoneName = z.infer<typeof KeystoneNameSchema>;
export type CharacterSpec = z.infer<typeof CharacterSpecSchema>;
export type CharacterClass = z.infer<typeof CharacterClassSchema>;
export type MythicKeystone = z.infer<typeof MythicKeystoneSchema>;
export type AppTypes = z.infer<typeof CharacterSchema>;
export type Party = z.infer<typeof PartySchema>;
export type ImportData = z.infer<typeof ImportDataSchema>;
export type Template = z.infer<typeof TemplateSchema>;

export const decodeParties = (data: string): Party[] => {
  try {
    const decodedString = atob(data);
    const parsedData = JSON.parse(decodedString);
    return PartiesSchema.parse(parsedData);
  } catch (error) {
    console.error("Failed to decode and validate parties:", error);
    throw error;
  }
};

export const decodeCharacters = (data: string): AppTypes[] => {
  try {
    const decodedString = atob(data);
    const parsedData = JSON.parse(decodedString);
    return CharactersSchema.parse(parsedData);
  } catch (error) {
    console.error("Failed to decode and validate characters:", error);
    throw error;
  }
};

export const decodeImportData = (data: string): ImportData => {
  try {
    const decodedString = atob(data);
    const parsedData = JSON.parse(decodedString);
    return ImportDataSchema.parse(parsedData);
  } catch (error) {
    console.error("Failed to decode and validate import data:", error);
    throw error;
  }
};

export const decodeTemplates = (data: string): Template[] => {
  try {
    const decodedString = atob(data);
    const parsedData = JSON.parse(decodedString);
    return TemplatesSchema.parse(parsedData);
  } catch (error) {
    console.error("Failed to decode and validate templates:", error);
    throw error;
  }
};
