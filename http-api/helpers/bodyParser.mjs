export const bodyParser = (req, callback) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    req.body = JSON.parse(body);
    callback();
  });
};
