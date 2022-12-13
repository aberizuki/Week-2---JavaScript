function checkPalindrome(text) {
  let array = [];
  let result = "";
  text = text.toLowerCase();

  for (x = text.length - 1; x >= 0; x--) {
    array.push(text[x]);
  }
  rev = array.join("");
  if (text.length > 2) {
    if (text == rev) {
      result = "ini adalah palindrome";
    } else {
      result = "ini bukan palindrome";
    }
  } else {
    result = "Huruf harus lebih dari 2";
  }
  return result;
}

console.log(checkPalindrome("Asuka"));
console.log(checkPalindrome("Asusa"));
console.log(checkPalindrome("Aa"));
