import fs from "fs/promises";

const filePath = "readJson.json";

const readAndAppendData = async () : Promise<void> => {
  try {
    const data = await fs.readFile(filePath);

    const people = [
      ...JSON.parse(data.toString()),
      {
        name: "appended in program",
        document: "000.000.000-00",
        birthDate: "1994-06-13T00:00:00.000|"
      }
    ];

    await fs.writeFile(filePath, JSON.stringify(people), "utf8");
    console.log("Finished writing file");

  } catch (error: any) {
    if(error.code === "ENOENT"){
      console.error(error);
    }
    else {
      throw error;
    }
  }
};

readAndAppendData();