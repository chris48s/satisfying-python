import assert from "assert";
import resolve from "./lib.js";

describe("resolver", function () {
  it("resolves min and max if format is PEP 621", async function () {
    const { min, max } = await resolve("./testdata/pep621.toml");
    assert.equal("3.7", min);
    assert.equal("3.8", max);
  });

  it("resolves min and max if format is Poetry", async function () {
    const { min, max } = await resolve("./testdata/poetry.toml");
    assert.equal("3.9", min);
    assert.equal("3.10", max);
  });

  it("throws if format is neither PEP 621 or Poetry", async function () {
    await assert.rejects(resolve("./testdata/invalid.toml"), {
      name: "Error",
      message:
        "Could not find either 'project.requires-python' or 'tool.poetry.dependencies.python' in pyproject.toml",
    });
  });
});
