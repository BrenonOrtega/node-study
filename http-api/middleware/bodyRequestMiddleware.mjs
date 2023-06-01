import { bodyParser } from "../helpers/bodyParser.mjs";

export const bodyRequestMiddleware = (req, res, handler) => {
  if ([ "PATCH", "POST", "PUT" ].includes(req.method))
    return bodyParser(req, () => handler(req, res));

  return handler(req, res);
};
