import "@logseq/libs";
import { settings } from "./settings";

const main = () => {
  console.log("<Insert name> plugin loaded");
};

logseq.useSettingsSchema(settings).ready(main).catch(console.error);
