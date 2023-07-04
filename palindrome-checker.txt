function palindrome(str) {
let reversedArr = []; 
str = str.trim().toLowerCase();
let forwardArr = str.match(/[a-z0-9]/g);
for(let i = forwardArr.length; i > 0; i--) {
  reversedArr.push(forwardArr[i-1]); 
}
return (forwardArr.join('') == reversedArr.join(''));
}
palindrome("My age is 0, 0 si ega ym.");