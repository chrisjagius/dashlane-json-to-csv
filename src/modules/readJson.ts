import path = require("path");
import fs = require("fs");
import { IoPaths } from "../interfaces/IoPaths";
import { DashlaneTypeMap } from "../maps/DashlaneTypeMap";

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
  const json: object = JSON.parse(data);
  Object.keys(json).forEach((key) => {
    if (!Object.keys(DashlaneTypeMap).includes(key)) {
      throw new Error("This doesn't appear to be a valid Dashlane export!");
    }
  });
  return json;
}
