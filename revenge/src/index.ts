import { showToast } from "@vendetta/ui/toasts";

import { buildStartMessage } from "../../common/plugin";
import Settings from "./settings";
import { initializeStorage, pluginStorage } from "./state";

function onLoad() {
    initializeStorage();
    if (pluginStorage.showStartMessage)
        showToast(buildStartMessage("SharedPluginTemplate", pluginStorage.message));
}

export default { onLoad, settings: Settings };
