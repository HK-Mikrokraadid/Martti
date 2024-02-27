let nums = [1, 2, 2, 3, 4, 4, 5];
let uniqueNums = [];

for (let i = 0; i < nums.length; i++) {
    if (!uniqueNums.includes(nums[i])) {
        uniqueNums.push(nums[i]);
    }
}

console.log(uniqueNums);
