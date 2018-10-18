function binToHex(binStr) {
  let z = -1,
      number = 0;

  for (let i = binStr.length; i > -1; i--) {
    if (binStr.charAt(i) === "1") {
      number += Math.pow(2, z);
    }
    z += 1;
  }
  return number.toString(16);
}

console.log(binToHex('1111111'));