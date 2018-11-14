function zipzap(num) {
  let total = '';
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      total += 'zip';
    } else if (i % 5 === 0) {
      total += 'zap';
    } else  {
      total += i;
    }
  }
  return total
}

console.log(zipzap(8));