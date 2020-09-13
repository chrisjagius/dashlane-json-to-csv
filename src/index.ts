import readline = require("readline");
import { validateFile } from "./readJson";

export function main(io: readline.Interface) {
  io.question(
    `Enter path to exported Dashlane JSON file, e.g. Users/me/dashlane.json: `,
    (path) => {
      // validateFile(path);
      io.close();
    }
  );
}

main(
  readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
);
