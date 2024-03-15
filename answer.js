//This is tempting to look at, but DON'T!.. At least not until you have passed all the tests
function dogMonthlyCost(array) {
  // Good luck!
  let sticks = "sticks";
  let balls = "balls";
  const numberSticks = array[1];
  if (numberSticks === 1) {
    sticks = "stick";
  }
  const costSticks = numberSticks * 5;
  const numberBalls = array[3];
  if (numberBalls === 1) {
    balls = "ball";
  }
  const costBalls = numberBalls * 0.2;
  let cost = costBalls - costSticks;
  if (!Number.isInteger(cost)) {
    cost = cost.toFixed(2);
  }
  return `My dog ${array[4]} has ${numberSticks} ${sticks} and ${numberBalls} ${balls}. This month they have cost me £${cost}`;
}
