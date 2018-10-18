function decToHex(number){
  let toNumber = +number;
  if (toNumber < 0)
  {
    toNumber = 0xFFFFFFFF + toNumber + 1;
  }

  return toNumber.toString(16);
}

console.log(decToHex('12'));