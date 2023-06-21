import fs from "fs";

const filePath = "readJson.json";

fs.readFile(filePath, (err, data) : void => {
  if (err) {
    console.error(err);
    return;
  }
  const people = [
    ...JSON.parse(data.toString()),
    {
      name: "appended in program",
      document: "000.000.000-00",
      birthDate: "1994-06-13T00:00:00.000|"
    }
  ];

  fs.writeFile(filePath, JSON.stringify(people), error => {
    if (error) {
      console.error(error);
      return;
    }

    console.log("Finished writing file");
  });
});