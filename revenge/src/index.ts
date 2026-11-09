/*
 * RevengeVencordPluginTemplate
 * Copyright (c) 2026 brainage04
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ReactNative as RN } from "@vendetta/metro/common";

import { buildStartMessage } from "../../common/plugin";
import Settings from "./settings";
import { initializeStorage, pluginStorage } from "./state";

function onLoad() {
    initializeStorage();
    if (pluginStorage.showStartMessage)
        RN.ToastAndroid.show(
            buildStartMessage("RevengeVencordPluginTemplate", pluginStorage.message),
            RN.ToastAndroid.LONG
        );
}

export default { onLoad, settings: Settings };
