import assert from "node:assert/strict";
import test from "node:test";

import { buildStartMessage, DEFAULT_CONFIG } from "./plugin";

test("both adapters receive the same normalized start message", () => {
    assert.equal(buildStartMessage("Example", " ready "), "Example: ready");
    assert.equal(buildStartMessage("Example", "  "), `Example: ${DEFAULT_CONFIG.message}`);
});
