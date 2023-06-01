import http from "http";
import routes from "./routes.mjs";

const handleHttpRequest = (req, res) => {
  const url = new URL(`http://localhost:${port}${req.url}`);
  const pathname = parseUrl(url.pathname, req);

  const route = routes
    .find((requestRoute) => requestRoute.resource === pathname && req.method === requestRoute.method);

  if (route) {
    prepareRequest(req, res, url); 
    return route.handler(req, res);
  }

  notFound(res);
};

const parseUrl = (pathname, req) => {
  const params = pathname
    .split("/")
    .filter((element, index) => index !== 1 && Boolean(element));

  if (params.length > 0) {
    const id = params[0];
    req.params = { id };
    req.url = req.url.replace(id, ":id");
    return req.url
  }

  return pathname;
};

const prepareRequest = (req, res, url) => {
  res.send = (statusCode, obj) => send(res, statusCode, obj);
  req.query = Object.fromEntries(url.searchParams);
};

const notFound = (res) => {
  send(res, 404);
};

const send = (res, statusCode, obj, contentType = "application/json") => {
  res.writeHead(statusCode, { "Content-Type": contentType });
  if (obj) {
    const jsonValue = JSON.stringify(obj);
    res.end(jsonValue);
    return;
  }

  res.end();
};

const port = 3000;
var server = http.createServer(handleHttpRequest);
server.listen(port, () => console.log(`Server listening on port ${port}`));