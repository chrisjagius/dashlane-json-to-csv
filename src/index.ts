import { validatePaths, validateFile } from "./modules/readJson";

export function main() {
  const args = process.argv.slice(2);
  const { inputPath, outputPath } = validatePaths(args);
  const data = validateFile(inputPath);
  const keys = Object.keys(data);
  console.log(keys);
  console.log(outputPath);
}

main();
