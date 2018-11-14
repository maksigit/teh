function isInCircle(r, x, y) {
  return (x * x + y * y) < (r * r);
}

console.log(isInCircle(1,2,4));
console.log(isInCircle(5, 2, 4));
console.log(isInCircle(1.25, 0.88, 0.88));
console.log(isInCircle(1.25, 0.89, 0.88));