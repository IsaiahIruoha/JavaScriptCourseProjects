function rot13(str) {
  let shiftArr = str.split('');
  for(let i = 0; i < shiftArr.length; i++) {
    if((/[A-Z]/).test(shiftArr[i])) {
      shiftArr.splice(i, 1, shiftArr[i].charCodeAt(0));
    }
  } 
  for(let i = 0; i < shiftArr.length; i++) {
    for(let j = 0; j < 13; j++) {
      if(typeof(shiftArr[i]) === 'number' && shiftArr[i] > 65) {
        shiftArr[i]--;
      } else if (typeof(shiftArr[i]) === 'number' && shiftArr[i] == 65) {
        shiftArr[i] = 90; 
      }
    }
  }
  for(let i = 0; i < shiftArr.length; i++) {
    if((/[0-9]/).test(shiftArr[i])) {
      shiftArr.splice(i, 1, String.fromCharCode(shiftArr[i]));
    }
  }
  return shiftArr.join('');
}
rot13("SERR PBQR PNZC");