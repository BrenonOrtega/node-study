import timer from "timers";

let occurences: number = 0;
const greetFiveTimes = () => {
  console.log(`Hello world`);
  occurences++;

  if(occurences >= 5){
    console.log("Done");
    clearInterval(timerId);
  } 
};

const timerId = timer.setInterval(greetFiveTimes, 1000);
