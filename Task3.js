let mtk = 790;
let ind = 79;
let ing = 79;
let ipa = 79;
tot = (mtk + ind + ing + ipa) / 4;

avg = "Rata rata : " + tot;

if (
  mtk != "" &&
  mtk <= 100 &&
  ind != "" &&
  ind <= 100 &&
  ing != "" &&
  ing <= 100 &&
  ipa != "" &&
  ipa <= 100
) {
  if (tot >= 90) {
    console.log(avg + "\n" + "Grade = A");
  } else if (tot >= 80) {
    console.log(avg + "\n" + "Grade = B");
  } else if (tot >= 70) {
    console.log(avg + "\n" + "Grade = C");
  } else if (tot >= 60) {
    console.log(avg + "\n" + "Grade = D");
  } else if (tot < 60) {
    console.log(avg + "\n" + "Grade = E");
  }
} else {
  console.log("Semua nilai harus terisi dan tidak boleh lebih dari 100");
}
