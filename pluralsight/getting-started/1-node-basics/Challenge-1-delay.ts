const delay = 5 * 1000;
const messageToDisplay = 'Hello World';

let accumulator: number = 0;

const HelloWithDelay = (waitTime: number, breakAfter: number, message: string = "This function is called") => {
  accumulator += waitTime / 1000;
  console.log(`${accumulator} - ${message}`);
  
  if(accumulator >= breakAfter){
    console.log("Done");
    process.exit();
  }
};

setInterval(HelloWithDelay, delay, delay, 25, messageToDisplay);

setInterval(HelloWithDelay, delay, delay, 35);