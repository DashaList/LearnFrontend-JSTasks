let printNumbers1 = (from, to) => {
    let i = from;

    let timerId = setInterval(() => {
        alert(i);
        if (i == to) {
            clearInterval(timerId);
        }
        i++;
    }, 1000);
};

let printNumbers2 = (from, to) => {
    let i = from;

    setTimeout(function func() {
        alert(i);
        if (i < to) {
            setTimeout(func, 1000);
        }
        i++;
    }, 1000);
};