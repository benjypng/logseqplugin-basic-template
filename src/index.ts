import "@logseq/libs";

const main = () => {
  console.log("");

  const settings = [];
};

logseq.useSettingsSchema(settings).ready(main).catch(console.error);
