// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must 
// start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic 
// naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate 
// whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish 
// may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not 
// contain numerals.

function feast(beast, dish) {
    const beastArr = beast.split('');
     const dishArr = dish.split('');
     return (beastArr[0] === dishArr[0]) && (beastArr[beastArr.length-1] === dishArr[dishArr.length-1]);
   };

// feast("great blue heron", "garlic naan");
// feast("chickadee", "chocolate cake");
// feast("brown bear", "bear claw");