function replaceVocal(text) {
  let result = "";

  if (typeof text == "string" && text != "") {
    for (let x = 0; x < text.length; x++) {
      if (text[x] == "a" || text[x] == "A") {
        result += "o";
      } else {
        result += text[x];
      }
    }
  } else {
    result = "Input harus berupa string";
  }
  return result;
}

console.log(replaceVocal("Asuka pacar abih"));
