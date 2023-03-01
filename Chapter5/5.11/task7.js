let getSecondsToTomorrow = () => {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  
    let r = tomorrow - now;
    return Math.round(r / 1000);
};