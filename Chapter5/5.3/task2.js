function checkSpam(str) {
    let newStr = str.toUpperCase();
    return newStr.includes('VIAGRA') || newStr.includes('XXX');
}