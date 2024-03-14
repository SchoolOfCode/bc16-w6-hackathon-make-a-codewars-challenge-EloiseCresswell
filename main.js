/**
 * Hello ther challenger! Your task is to write a function named `dogMonthlyCost` which takes in an array and returns the cost of the dog based on how many items it needs and returns a string with the name of the dog and the cost of their toys that month.
 *
 * The array
 * ['item1', numberofItem1, 'item2', numberofItem2, 'name of dog']
 *
 * Cost of some of the items...
 * - a stick will actually bring you money! (You get £5 per whole stick!)
 * - a ball will cost you 20p to purchase
 *
 *Please note, with this dog, you will also be loosing money, so they will always cost you!
 *However, take into consideration what you may need to change if there was only 1 item *recieved or if no items were received...
 *
 * A few examples:
 *    `dogMonthlyCost(['sticks', 2 , 'balls', 100, 'Ivy'])` should return "My dog Ivy has 2 sticks and 100 balls. This month they have cost me £10"
 *    `dogMonthlyCost(['sticks', 0, 'balls', 50, 'Steve'])` should return "My dog Steve has 0 sticks and 50 balls. This month they have cost me £10"
 */

export function dogMonthlyCost(array) {
  // Good luck!
  let sticks = "sticks";
  const numberSticks = array[1];
  if (numberSticks === 1) {
    sticks = "stick";
  }
  const costSticks = numberSticks * 5;
  const numberBalls = array[3];
  const costBalls = numberBalls * 0.2;
  const cost = costBalls - costSticks;
  return `My dog ${array[4]} has ${numberSticks} ${sticks} and ${numberBalls} balls. This month they have cost me £${cost}`;
}

//['sticks', 2 , 'balls', 100, 'Ivy']
// "My dog Ivy has 2 sticks and 100 balls. This month they havs cost me £10"
