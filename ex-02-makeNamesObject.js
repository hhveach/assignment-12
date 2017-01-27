// EXAMPLE:
// makeNamesObject("George Washington, John Adams, Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

function makeNamesObject(inputStringOne, inputStringTwo, inputStringThree){

var newOne = inputStringOne.split(' ');
var newTwo = inputStringTwo.split(' ');
var newThree = inputStringThree.split(' ');

var newObj = {
  [newOne[0]]: newOne[1],
  [newTwo[0]]: newTwo[1],
  [newThree[0]]: newThree[1]
  }

return newObj;
}
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
