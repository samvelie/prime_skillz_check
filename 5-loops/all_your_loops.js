// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;

for (var i = 0; i <5; i++) {
  checkz+=1;
}

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2

i = 0;

while(i<3){
  checkz-=2;
  i++;
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.

/*This code loops across length of the array, adding the value at each index to a variable called total. Total becomes the combined value of all the values in the array. Then it logs total to the console.*/
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);
