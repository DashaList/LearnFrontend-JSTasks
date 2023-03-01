let getMaxSubSum = (arr) => {
    let maxSum = 0, currentMaxSum = 0;

    for (let a of arr) {
        if (currentMaxSum + a <= 0) {
            currentMaxSum = 0;
        } else {
            currentMaxSum += a;
            maxSum = Math.max(currentMaxSum, maxSum);
        }
    }

    return maxSum;
};