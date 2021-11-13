// #1 i--
const numbers = [1, 2, 3, 4, 5, 6];

const numsGreater5 = numbers.filter((val) => val > 5);
console.log(numsGreater5);

// #1 ii--
const mappedNumbers = numbers.map((val) => ({ num: val }));
console.log(mappedNumbers);

// #1 iii--
const multiplication = numbers.reduce(
  (curResult, curValues) => curResult * curValues,
  1
);
console.log(multiplication);

// #2 i--
function findMax(...nums) {
  // ... rest parameter
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...numbers)); // ... spread operator

// #3 i--
function findMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMax(...numbers);

console.log(min, max);

// #4 i--
const userIds = new Set();
userIds.add(11);
userIds.add(27);
userIds.add(27);

console.log(userIds);
