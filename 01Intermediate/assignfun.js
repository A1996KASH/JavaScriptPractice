let getMygrades = function(currentMarks, totalMarks) {
  let percentage = (currentMarks / totalMarks) * 100;

  let myGrade = "";
  if (percentage >= 90) {
    myGrade = "A";
  } else if (percentage >= 80) {
    myGrade = "B";
  } else if (percentage >= 70) {
    myGrade = "C";
  } else if (percentage >= 60) {
    myGrade = "D";
  } else {
    myGrade = "F";
  }
  return `Your Grade is ${myGrade} and Percentage is ${percentage}`;
};

console.log(getMygrades(200,300));
console.log(getMygrades(300, 300));
