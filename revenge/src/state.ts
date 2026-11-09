/*
 * RevengeVencordPluginTemplate
 * Copyright (c) 2026 brainage04
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { storage } from "@vendetta/plugin";

import { DEFAULT_CONFIG, type PluginConfig } from "../../common/plugin";

export const pluginStorage = storage as PluginConfig;

export function initializeStorage() {
    pluginStorage.message ??= DEFAULT_CONFIG.message;
    pluginStorage.showStartMessage ??= DEFAULT_CONFIG.showStartMessage;
}
