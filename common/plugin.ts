export interface SharedPluginConfig {
    message: string;
    showStartMessage: boolean;
}

export const DEFAULT_CONFIG: SharedPluginConfig = {
    message: "Both platform adapters are using the shared core.",
    showStartMessage: true
};

export function buildStartMessage(pluginName: string, configuredMessage: string) {
    const message = configuredMessage.trim() || DEFAULT_CONFIG.message;
    return `${pluginName}: ${message}`;
}
