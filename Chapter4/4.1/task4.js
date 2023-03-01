let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;

let salariesSum = obj => {
    let sum = 0;

    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
};

sum = salariesSum(salaries);