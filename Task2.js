const Bio = {
  name: "Asuka", //String
  age: 25, //Number
  hobby: ["reading"], //Array
  isMarried: true, //Boolean (with abi)
  schoolList: [
    //Array of Object
    {
      schoolName: "University of Tokyo",
      yearIn: "2017",
      yearOut: "2021",
      major: "Software Engineer",
    },
  ],
  skills: [{ skillName: "Dancing", level: "Advanced" }],
  interestInCoding: false, //Boolean
};

console.log(Bio.schoolList);
