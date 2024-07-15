import '@logseq/libs'
import { handlePopup } from './handle-popup'

const main = async () => {
  console.log('<insert-plugin-name> loaded')

  // Used to handle any popups
  handlePopup()
}

logseq.useSettingsSchema(settings).ready(main).catch(console.error)
