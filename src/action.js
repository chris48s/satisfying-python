import core from "@actions/core";
import resolve from "./lib.js";

(async () => {
  try {
    const { min, max } = await resolve();
    core.setOutput("min", min);
    core.setOutput("max", max);
  } catch (e) {
    core.setFailed(e.message);
  }
})();
