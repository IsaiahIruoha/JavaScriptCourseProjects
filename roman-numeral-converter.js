let romanArr = [];
function convertToRoman(num) { 
  if(num >= 1000) {
    romanArr.push('M');
    num -= 1000;   
  } else if (num >= 900 && num < 1000) {
    romanArr.push('CM');
    num -= 900;  
  } else if (num >= 500 && num < 900) {
    romanArr.push('D');
    num -= 500; 
  } else if (num >= 400 && num < 500) {
    romanArr.push('CD');
    num -= 400;  
  } else if (num >= 100 && num < 400) {
    romanArr.push('C');
    num -= 100; 
  } else if (num >= 90 && num < 100) {
    romanArr.push('XC');
    num -= 90;  
  } else if (num >= 50 && num < 90) {
    romanArr.push('L');
    num -= 50;  
  } else if (num >= 40 && num < 50) {
    romanArr.push('XL');
    num -= 40;
  } else if (num >= 10 && num < 40) {
    romanArr.push('X');
    num -= 10;
  } else if (num >= 9 && num < 10) {
    romanArr.push('IX');
    num -= 9;
  } else if (num >= 5 && num < 9) {
    romanArr.push('V');
    num -= 5; 
  } else if (num >= 4 && num < 5) {
    romanArr.push('IV');
    num -= 4;
  } else if (num >= 1 && num < 4) { 
    romanArr.push('I');
    num -= 1;
  } else {
    let str = romanArr.join('').trim();
    romanArr = []; 
    return str;
  }
return convertToRoman(num); 
}
convertToRoman(3999);