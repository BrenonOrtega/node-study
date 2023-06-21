let executions = 0;
let timerDelay = 100;

const print5TimesAugmentingDelay = () => {
  executions++;
  console.log(`Hello World by the ${executions}º time - ${timerDelay} milliseconds`);
  
  if (executions === 5) {
    executions = 0;
    timerDelay += 100;
    clearInterval(timerId);
    timerId = setInterval(print5TimesAugmentingDelay, timerDelay);
  }
};

let timerId = setInterval(print5TimesAugmentingDelay, timerDelay);