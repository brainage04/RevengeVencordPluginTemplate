/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 brainage04
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export interface PluginConfig {
    message: string;
    showStartMessage: boolean;
}

export const DEFAULT_CONFIG: PluginConfig = {
    message: "Both platform adapters are using the shared core.",
    showStartMessage: true
};

export function buildStartMessage(pluginName: string, configuredMessage: string) {
    const message = configuredMessage.trim() || DEFAULT_CONFIG.message;
    return `${pluginName}: ${message}`;
}
