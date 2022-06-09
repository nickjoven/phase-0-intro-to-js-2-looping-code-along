// ACTUAL ASSIGNMENT

const friends = ["Kait", "Nic", "Sam", "Sophia"]
const eventName = "Juneteenth"

function writeCards(friends, eventName) {
  let i = 0;
  let returnArray = [];
  for (let i = 0; i < friends.length; i++) { 
    returnArray.push(`Thank you, ${friends[i]}, for the wonderful ${eventName} gift!`); 
  } return returnArray;
}

console.log(writeCards(friends, eventName));
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

// Good enough.

function countDown(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}

countDown(19);







































/* thinking through the above.

I have an array.
I have a message. 
[`Thank you, ${expectArray[i]}, for the wonderful ${expectString} gift!`];
// Code along notes - Assignment Code begins line 70
/* This is the problem presented by the lesson:

const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}

wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);
// wrapGift(gifts); the function is designed for wrapping individual gifts
//not to say that you can't wrap the array, but the message isn't as clean

//We initialize the gifts variable as an array with const = [value0, value1, value 2];

//then we make a function wrap(gift) that prints a message to the console

// our function could be more efficient. Plus, having to call each gift
// with a new function every time is repetitive.
*/
/*
for ([initialization]; [condition]); [iteration]) {
    [loop body]
};
/*
Initialization is typically used to initialize a counter variable
Condition is there to tell JavaScript to run the statements in the loop body
if true, it proceeds, if false, it exits the loop.
[iteration] is an expression that is executed at the end of each iteration
logically this should help bring the loop to a close, e.g. incrementing or
decrementing a counter
         {
             [loop body] //=> the stuff that happens
         } 

*/
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
    // debugger; // removed to proceed
}


// When we run the debugger (continuing to get to >debugger),
// age returns 30
// when we continue up to the second time we get to the debugger
// age returns 31. as expected

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

*/
// Run the debugger. Expect i = 0 (initialized value), i less than length
// of gifts array (length is 3, 0 < 3), proceed with code block
// print console message of array at current position i [0]
// behaved as expected in debugger

