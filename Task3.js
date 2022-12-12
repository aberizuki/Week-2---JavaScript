let mtk = 79;
let ind = 79;
let ing = 79;
let ipa = 79;
tot = (mtk + ind + ing + ipa) / 4;

avg = "Rata rata : " + tot;

if (mtk != "" && ind != "" && ing != "" && ipa != "") {
  if (tot >= 90) {
    console.log("Grade = A" + "\n" + avg);
  } else if (tot >= 80) {
    console.log("Grade = B" + "\n" + avg);
  } else if (tot >= 70) {
    console.log("Grade = C" + "\n" + avg);
  } else if (tot >= 60) {
    console.log("Grade = D" + "\n" + avg);
  } else if (tot < 60) {
    console.log("Grade = E" + "\n" + avg);
  }
} else {
  console.log("Semua nilai harus terisi !");
}
