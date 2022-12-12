function checkPalindrome(string) {
  let array = [];
  let result = "";
  string = string.toLowerCase();

  for (x = string.length - 1; x >= 0; x--) {
    array.push(string[x]);
  }

  rev = array.join("");

  if (string.length > 2) {
    if (string == rev) {
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
