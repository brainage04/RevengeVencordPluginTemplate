import { definePluginSettings } from "@api/Settings";
import { OptionType, type PluginDef } from "@utils/types";
import { showToast, Toasts } from "@webpack/common";

import { buildStartMessage, DEFAULT_CONFIG } from "../common/plugin";

const settings = definePluginSettings({
    showStartMessage: {
        type: OptionType.BOOLEAN,
        description: "Show the shared example message when the plugin starts",
        default: DEFAULT_CONFIG.showStartMessage
    },
    message: {
        type: OptionType.STRING,
        description: "Message passed through the shared core",
        default: DEFAULT_CONFIG.message
    }
});

export const vencordPlugin = {
    description: "Working Revenge + Vencord plugin template with a shared core.",
    authors: [{ name: "brainage04", id: 0n }],
    settings,

    start() {
        if (settings.store.showStartMessage)
            showToast(buildStartMessage("SharedPluginTemplate", settings.store.message), Toasts.Type.MESSAGE);
    }
} satisfies Omit<PluginDef, "name">;
