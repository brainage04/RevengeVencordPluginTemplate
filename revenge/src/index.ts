import { ReactNative as RN } from "@vendetta/metro/common";

import { buildStartMessage } from "../../common/plugin";
import Settings from "./settings";
import { initializeStorage, pluginStorage } from "./state";

function onLoad() {
    initializeStorage();
    if (pluginStorage.showStartMessage)
        RN.ToastAndroid.show(
            buildStartMessage("SharedPluginTemplate", pluginStorage.message),
            RN.ToastAndroid.LONG
        );
}

export default { onLoad, settings: Settings };
