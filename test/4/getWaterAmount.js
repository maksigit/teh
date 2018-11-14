function getWaterAmount(arr) {
  let arrLength = arr.length;
  let current = 0;
  let total = 0;
  let boo = false;

  function maxCurrent(cur, arr) {
    for (let i = 0; i < arrLength; i++) {
      if (arr[i] > cur) {
        boo = false;
        break
      } else {
        boo = true
      }
    }
    return boo
  }

  for (let i = 0; i < arrLength; i++) {
    if (current < arr[i] && arr[i] > arr[i + 1]) {
      current = arr[i];
      if (current > arr[i + 1] && arr[i + 1] < arr[i + 2] && maxCurrent(current, arr)) {
        total += (arr[i + 2] - arr[i + 1])
      } else {
        total += (current - arr[i + 1])
      }
    } else if (arr[i + 1] < current && arr[i + 1] < arr[i + 2]) {
      total += (current - arr[i + 1])
    }
  }

  return total
}

console.log(getWaterAmount([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));