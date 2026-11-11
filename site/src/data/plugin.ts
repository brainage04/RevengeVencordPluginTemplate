/** Page content for this plugin. Keep it in step with the plugin's code in `revenge/`, `vencord/` and `common/`. */
export interface Card {
  title: string;
  /** Plain text; spans in backticks render as code. */
  text: string;
}

export interface Setting {
  name: string;
  defaultValue: string;
  description: string;
}

export interface Section {
  title: string;
  intro?: string;
  items: string[];
}

export interface PluginPage {
  /** GitHub repository name; also the Pages base path (`https://brainage04.github.io/<repository>/`). */
  repository: string;
  /** The Vencord entry file in the repository root. */
  vencordEntry: 'index.ts' | 'index.tsx';
  /** Folder name under Vencord's `src/userplugins/`, as in DiscordPluginInstaller's catalog. */
  vencordDirectory: string;
  /** The card grid: a title naming what the cards describe (what it does, how to use it, how it works). */
  cards: { title: string; items: Card[] };
  /** The same settings exist on Revenge and Vencord unless `settingsNote` says otherwise. */
  settings: Setting[];
  settingsNote?: string;
  sections: Section[];
}

export const plugin: PluginPage = {
  repository: 'RevengeVencordPluginTemplate',
  vencordEntry: 'index.ts',
  vencordDirectory: 'revengeVencordPluginTemplate.vesktop',
  cards: {
    title: 'How it works',
    items: [
      {
        title: 'Shared core',
        text: '`common/` holds the code both clients use, with tests run by `npm test`. The example builds the start message shown by both adapters.',
      },
      {
        title: 'Revenge adapter',
        text: '`revenge/` holds the Revenge plugin and its manifest. `npm run build` bundles it into `dist/manifest.json` and `dist/index.js`, and the manifest gets the hash of the bundle.',
      },
      {
        title: 'Vencord adapter',
        text: '`index.ts` and `vencord/` are the Vencord userplugin. Its settings use Vencord’s settings API; the Revenge side has a matching settings screen.',
      },
      {
        title: 'Plugin website',
        text: '`site/` is this page. It is deployed to GitHub Pages and serves the Revenge build at the site root, so the page URL is also the Revenge install URL.',
      },
    ],
  },
  settings: [
    {
      name: 'Show start message',
      defaultValue: 'On',
      description: 'Show the example message when the plugin starts.',
    },
    {
      name: 'Message',
      defaultValue: 'Both platform adapters are using the shared core.',
      description: 'Message passed through the shared core. A blank value uses the default.',
    },
  ],
  settingsNote:
    'The example plugin shows a toast such as `RevengeVencordPluginTemplate: Both platform adapters are using the shared core.` when it starts.',
  sections: [
    {
      title: 'Starting a new plugin',
      intro: 'After creating a repository from this template, change:',
      items: [
        '`revenge/manifest.json`: the plugin `name`, `description` and Revenge icon.',
        '`index.ts`: the plugin name passed to `definePlugin`, which Vencord requires to be a string literal.',
        '`vencord/` and `revenge/src/`: the plugin itself, with shared logic in `common/`.',
        '`site/src/data/plugin.ts`: the repository name, Vencord folder name and this page’s text.',
        '`catalog.json` in DiscordPluginInstaller, if the installer should know about the plugin.',
      ],
    },
  ],
};

export const sourceHref = `https://github.com/brainage04/${plugin.repository}`;
