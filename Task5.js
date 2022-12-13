function replaceVocal(text) {
  let result = "";

  if (typeof text == "string") {
    for (let x = 0; x < text.length; x++) {
      if (text[x] == "a") {
        result += "o";
      } else if (text[x] == "A") {
        result += "O";
      } else {
        result += text[x];
      }
    }
  } else {
    result = "Input harus berupa string";
  }
  return result;
}

console.log(replaceVocal("Saito Asuka"));
console.log(replaceVocal("JAKARTA"));
console.log(replaceVocal(3110));
