function hasTargetSum(array, target) {
  //iterate over the array of numbers
  for(let i = 0; i < array.length; i ++) {
  //for the current number, identify a complementary number that adds to the target 
  const other = target - array[i];
  //iterate over the remaining numbers in the array 
  for(let j = i + 1; j < array.length; j++) {
    //check if any of the remaning numbers is the other 
    //if so, return true 
    if(array[j] === other) return true;
  }
  }
  //if we reach the end of the array, return false 
  return false;
}

/* 
  Write the Big O time complexity of your function here

  // first is n steps depending on the length of the input array 
  // n * n steps because it's a nested loop 
  // 1 more step to return false 
  // 0(n * n) 

*/

/* 
  Add your pseudocode here
// */
//the function returns true if any opf the numbers in the array add up to the target number 
// add every number in the array to get the target number 
// if the array contains 2 numbers that add up to the target, return true 
//otherwise, return false 


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
