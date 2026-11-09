# RevengeVencordPluginTemplate

A template for Discord plugins that run on both Revenge (Android) and Vencord (Vesktop) from one repository: shared logic in one place, a small adapter per client, and a GitHub Pages site that also serves the Revenge build. The example plugin has the same name as the repository and shows a start message on both clients.

Page with the details: <https://brainage04.github.io/RevengeVencordPluginTemplate/>

## Starting a new plugin

Create a repository from this template (**Use this template** on GitHub), then change:

- `revenge/manifest.json`: the plugin `name`, `description` and Revenge icon.
- `index.ts`: the plugin name passed to `definePlugin`, which Vencord requires to be a string literal.
- `vencord/` and `revenge/src/`: the plugin itself, with shared logic in `common/`.
- `site/src/data/plugin.ts`: the repository name, Vencord folder name and the page's text.
- `catalog.json` in [DiscordPluginInstaller](https://github.com/brainage04/DiscordPluginInstaller), if the installer should know about the plugin.

## Install the example

- **Revenge:** in Discord, open Settings, go to Revenge's **Plugins** page, tap **+** and paste `https://brainage04.github.io/RevengeVencordPluginTemplate/`.
- **Vesktop (Vencord):** use [DiscordPluginInstaller](https://github.com/brainage04/DiscordPluginInstaller):

  ```bash
  git clone https://github.com/brainage04/DiscordPluginInstaller.git
  cd DiscordPluginInstaller
  node src/cli.mjs vencord install --plugins RevengeVencordPluginTemplate --enable --restart
  ```

  Or copy `index.ts`, `common/` and `vencord/` into Vencord's `src/userplugins/revengeVencordPluginTemplate.vesktop/` and build Vencord yourself; the page has the steps.

## Build and test

```bash
npm ci
npm test        # tests for the shared code in common/
npm run build   # Revenge build: dist/manifest.json and dist/index.js
```

`common/` holds the code both clients share, `revenge/` the Revenge plugin and its manifest, and `index.ts` with `vencord/` the Vencord userplugin. `site/` is the GitHub Pages site, which also serves the Revenge build; see [site/README.md](site/README.md).

## Licence

GPL-3.0-or-later. See [LICENSE](LICENSE).
