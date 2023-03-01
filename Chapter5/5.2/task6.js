function randomInteger(min, max) {
    let rand = Math.random() * (max + 1 - min) + min;
    return Math.floor(rand);
}