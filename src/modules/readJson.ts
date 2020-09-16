import path = require("path");
import fs = require("fs");
import { IoPaths } from "../interfaces/IoPaths";

export function validatePaths(
  paths: string[],
  pathModule: path.PlatformPath = path
): IoPaths {
  const [rawInputPath, rawOutputPath] = paths;
  return {
    inputPath: pathModule.normalize(rawInputPath),
    outputPath: pathModule.normalize(rawOutputPath),
  };
}

export function validateFile(
  filePath: fs.PathLike,
  fsModule: typeof fs = fs
): object {
  const data = fsModule.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}
