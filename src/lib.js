import fs from "fs/promises";
import pep440 from "@renovatebot/pep440";
import { parse } from "smol-toml";
import versions from "./versions.json" assert { type: "json" };

export default async function resolve(filename = "./pyproject.toml") {
  const pyproject = parse(await fs.readFile(filename, "utf8"));
  const pep621Constraint = pyproject?.project?.["requires-python"];
  const poetryConstraint = pyproject?.tool?.poetry?.dependencies?.python;
  const constraint = pep621Constraint || poetryConstraint;
  if (!constraint) {
    throw new Error(
      "Could not find either 'project.requires-python' or 'tool.poetry.dependencies.python' in pyproject.toml",
    );
  }
  return {
    max: pep440.maxSatisfying(versions, constraint),
    min: pep440.minSatisfying(versions, constraint),
  };
}
