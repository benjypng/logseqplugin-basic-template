import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user";

export const settings: SettingSchemaDesc[] = [
  {
    key: "sampleKey",
    title: "Sample Title",
    description: "Sample Description",
    type: "string",
    default: "Default setting",
  },
];
