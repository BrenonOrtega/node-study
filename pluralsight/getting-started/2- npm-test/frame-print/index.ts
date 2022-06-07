const log = console.log;

const prettyPrint = (text: string) => {
  var stars = "*".repeat(text.length);
  log(stars);
  log(text);
  log(stars);
};

export { prettyPrint };