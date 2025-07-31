const fs = require("fs");
const path = require("path");

const fsPromise = require("fs").promises;

const fileOps = async () => {
  try {
    const data = await fsPromise.readFile(
      path.join(__dirname, "Files", "readfile.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromise.writeFile(
      path.join(__dirname, "Files", "writefile.txt"),
      "Hellooooooo !!!"
    );
    await fsPromise.appendFile(
      path.join(__dirname, "Files", "writefile.txt"),
      "\n\nVanakkam!!!"
    );
    await fsPromise.rename(
      path.join(__dirname, "Files", "writefile.txt"),
      path.join(__dirname, "Files", "renamed.txt"),
    );
    await fsPromise.rename(
        path.join(__dirname, "Files", "renamed.txt"),
        path.join(__dirname, "Files", "rererenamed.txt"),  // This is possible only because we used async and await 
                                                          // otherwise it would have arised an error
      );
      await fsPromise.unlink(
        path.join(__dirname, "Files", "rererenamed.txt"),  // For Delete                                             
      );
  } catch (err) {
    console.error(err);
  }
};

fileOps();

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});
