import express, { Express, Request, Response } from "express";

const port = 4242;

const requestListener = (): void => console.log("Incoming request - pretend that i'm logging this to ELK.");
const startServer = (): void => console.log(`Server started at port ${port}`);

var server: Express = express();
server.on("request", requestListener);

const getBankstatement = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const response = { id: "1", type: "fund-transfer", amount: 1000 };

  res.type("application/json")
    .status(200)
    .append("x-my-custom-header", "Kyogre")
    .json(Array(20).fill(response));

  console.log({ id, res });
};

server.use("/api/bankstatement/:id", getBankstatement);

server.listen(port, startServer);