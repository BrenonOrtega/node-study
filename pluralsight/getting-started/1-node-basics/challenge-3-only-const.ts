
const printIncrementingByOneSecond = (addedTime: number = 0) => {
  const delay = 1000 + addedTime;
  console.log(`Hello world! in ${delay / 1000} seconds.`);
  setTimeout(printIncrementingByOneSecond, delay, delay);
};

printIncrementingByOneSecond();