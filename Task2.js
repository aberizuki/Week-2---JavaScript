const Bio = {
  name: "Asuka", //String
  age: 25, //Number
  hobby: ["reading", "dancing"], //Array
  IsMarried: false, //Boolean
  schoolList: [
    {
      schoolName: "University of Tokyo",
      yearIn: "2017",
      yearOut: "2021",
      major: "Computer Sience",
    },
    {
      schoolName: "Nogizaka Highschool",
      yearIn: "2014",
      yearOut: "2017",
      major: "Science",
    },
  ], //Array of Object
  skills: [{ skillName: "Dancing", level: "Advanced" }], //Array of Object
  interestInCoding: true, //Boolean
};

console.log(Bio.schoolList[0].schoolName);
