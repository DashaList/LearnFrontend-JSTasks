let filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
      let n = arr[i];

      if (n < a || n > b) {
        arr.splice(i, 1);
        i--;
      }
    }
};