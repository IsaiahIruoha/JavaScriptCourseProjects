function telephoneCheck(str) {
  str.trim();
  let phoneArr = str.split('');
  let numCount = 0;
  let openBracket = false;
  let closeBracket = false;   

  //Number counter 
  for(let i = 0; i < phoneArr.length; i++) {
    if(/[0-9]/.test(phoneArr[i])) {
      numCount++;
    }

    //Odd characters check
    if(!/[0-9-()\s]/.test(phoneArr[i])) {
      return false; 
    }

//Bracket pairing existance check 
    if(phoneArr[i] === '(') openBracket = true;
    if(phoneArr[i] === ')') closeBracket = true; 

//Bracket paired with closed bracket check 
    if(phoneArr[i] == '(') {
      if(phoneArr[i+4] == ')') {
        continue;
      } else {
        return false; 
      }
    }

//Check to ensure that numbers are grouped in three's or four's
    if(i != 0 && /[0-9]/.test(phoneArr[i]) && !/[0-9]/.test(phoneArr[i-1])) {
      if(/[0-9]/.test(phoneArr[i+2])) {
        console.log(phoneArr[i+2]); 
        continue;
      } else if (/[0-9]/.test(phoneArr[i+3])){
        console.log(phoneArr[i+3]); 
        continue;  
      } else {
        console.log(phoneArr[i], i); 
        return false;
      }
    }
  } 

//Bracket paired with partner exit statement
  if(openBracket && !closeBracket || !openBracket && closeBracket) {
    return false; 
  }

//Improper number count exit statement
  if(numCount >= 12) {
      return false; 
    } else if (numCount === 11) {
      if(phoneArr[0] != 1) {
        return false; 
      }
    } else if (numCount < 10) {
      return false; 
    } 
  return true;
}
telephoneCheck("555-555-5555");