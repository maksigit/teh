function createSign(privateKey, data) {
  let privateKeyLenght = privateKey.length;
  let dataLenght = data.length;
  let total = '';

  for (let i = 0; i < dataLenght; i++) {
    total += String.fromCharCode(data[i].charCodeAt(0) + privateKeyLenght)
  }
  return total
}

console.log(createSign('asd', 'hello'));

function decipher (privateKey, data) {
  let privateKeyLenght = privateKey.length;
  let dataLenght = data.length;
  let total = '';

  for (let i = 0; i < dataLenght; i++) {
    total += String.fromCharCode(data[i].charCodeAt(0) - privateKeyLenght)
  }
  return total
}

console.log(decipher('asd', 'khoor'));
