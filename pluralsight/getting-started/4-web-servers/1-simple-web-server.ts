import express, { Express, Request, Response } from "express";

const port = 4242;

const requestListener = (): void => console.log("Incoming request - pretend that i'm logging this to ELK.");
const startServer = (): void => console.log(`Server started at port ${port}`);

const response = { id: "1", type: "fund-transfer", amount: 1000 };
const responses = Array(20).fill(response);

var server: Express = express();
server.on("request", requestListener);

const getBankstatement = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  res.type("application/json")
    .status(200)
    .append("x-my-custom-header", "Kyogre")
    .json(responses);

  console.log({ id, res });
};

server.use("/", (req, res) => res.status(200).send(`<h1>Hello to my app</h1><ul>${responses.map(x => `<li>${x}</li>`)}</ul>`));
server.use("/api/bankstatement/:id", getBankstatement);

server.listen(port, startServer);