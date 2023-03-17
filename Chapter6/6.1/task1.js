let sumTo1 = (n) => {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
};

let sumTo2 = (n) => {
    return (n == 1) ? 1 : (n + sumTo2(n - 1));
};

let sumTo3 = (n) => {
    return (1 + n) * n / 2;
};