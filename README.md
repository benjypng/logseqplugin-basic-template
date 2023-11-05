[:gift_heart: Sponsor this project on Github](https://github.com/sponsors/hkgnp) or [:coffee: Get me a coffee](https://www.buymeacoffee.com/hkgnp.dev) if you like this plugin!

# Overview

Bootstrap a basic template to build plugins for Logseq.

# Instructions

### Getting Started

This template uses `pnpm`. [Install it](https://pnpm.io/installation) if you do not have it installed yet.

1. Clone repository.
2. Run `pnpm run dev:start`.
3. Navigate to `index.ts` and start building!
4. Edit `package.json` to your plugin name.

### Github Actions

Included is a GitHub Actions workflow in `.github/workflows/publish.yml`. It assumes that your plugin icon can be found in root, and the filename is `icon.svg`. Please edit the `yml` file if this is not the case.

This template also uses `semantic release` to manage versioning for each release. Please ensure that `package.json` reflects the correct name of the zip file that it generates.

Example:

```
  "release": {
    "branches": [
      "main"
    ],
    "plugins": [
      [
        "@semantic-release/github",
        {
          "assets": [
            "logseq-mysampleplugin-plugin.zip"
          ]
        }
      ]
    ]
  },
```
