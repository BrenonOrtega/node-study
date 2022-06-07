import timer from "timers";

let occurences: number = 0;

const timerId = timer.setInterval(() => {
  console.log(`Hello world`);
  occurences++;

  if(occurences >= 5){
    clearInterval(timerId);
  } 
});