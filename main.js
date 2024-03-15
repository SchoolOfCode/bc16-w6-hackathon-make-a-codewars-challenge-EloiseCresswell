/**
 * Hello there challenger! Your task is to write a function named `dogMonthlyCost` which takes in an array and returns the cost of the dog based on how many items it needs and returns a string with the name of the dog and the cost of their toys that month.
 *
 * The array
 * ['item1', numberofItem1, 'item2', numberofItem2, 'name of dog']
 *
 * Cost of some of the items...
 * - a stick will actually bring you money! (You get £5 per whole stick!)
 * - a ball will cost you 20p to purchase
 *
 *However, take into consideration what you may need to change if there was only 1 item recieved...
 *If the cost is less than £1, for example 20p, the answer string should still be in pound format i.e. £0.20.
 * A few examples:
 *    `dogMonthlyCost(['sticks', 2 , 'balls', 100, 'Ivy'])` should return "My dog Ivy has 2 sticks and 100 balls. This month they have cost me £10"
 *    `dogMonthlyCost(['sticks', 0, 'balls', 50, 'Steve'])` should return "My dog Steve has 0 sticks and 50 balls. This month they have cost me £10"
 *    `dogMonthlyCost(['sticks', 5, 'balls, 2, 'Ivy'])`  should return "My dog Ivy has 5 sticks and 2 balls. This month they have made me £24.60"
 */

export function dogMonthlyCost(array) {
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

//['sticks', 2 , 'balls', 100, 'Ivy']
// "My dog Ivy has 2 sticks and 100 balls. This month they havs cost me £10"
