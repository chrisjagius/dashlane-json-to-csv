import fs = require("fs");

export function validateFile(path: fs.PathLike) {
  fs.open(path, "r", (error, fileData) => {
    if (error) {
      if (error.code === "ENOENT") {
        console.error("myfile does not exist");
        return;
      }

      throw error;
    }

    // readMyData(fileData);
  });
}
