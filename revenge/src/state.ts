import { storage } from "@vendetta/plugin";

import { DEFAULT_CONFIG, type SharedPluginConfig } from "../../common/plugin";

export const pluginStorage = storage as SharedPluginConfig;

export function initializeStorage() {
    pluginStorage.message ??= DEFAULT_CONFIG.message;
    pluginStorage.showStartMessage ??= DEFAULT_CONFIG.showStartMessage;
}
