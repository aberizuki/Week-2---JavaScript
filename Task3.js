let mtk = 100;
let ind = 100;
let ing = 100;
let ipa = 100;
tot = (mtk + ind + ing + ipa) / 4;

if (mtk != "" && ind != "" && ing != "" && ipa != "") {
  if (tot >= 90) {
    console.log("A");
  } else if (tot >= 80) {
    console.log("B");
  } else if (tot >= 70) {
    console.log("C");
  } else if (tot >= 60) {
    console.log("D");
  } else if (tot < 60) {
    console.log("E");
  }
} else {
  console.log("Nilai ada yang kosong");
}
