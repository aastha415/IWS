function matchStudentWithCollege(student, college) {
  var matchScore = 0;

  //Matches a student's GPA with the college's GPA. The closer the two scores the greater the result
  matchScore += 1 / (1 + Math.pow(Math.E, (2 * (Math.abs(student.getGPA - college.getAverageGpa))) - 4));

  //Matches a student's GRE with the college's GRE. The closer the two scores the greater the result
  matchScore += 1 / (1 + Math.pow(Math.E, ((1/50) * (Math.abs(student.getGREScore - college.getAverageGre))) - 3));

  //If the college has the student's desired degree or the student does not have adesired degree, increases the matchScore by 1.5
  if (college.getBestDegrees.includes(student.getDesiredDegree) || student.getDesiredDegree == "NA") {
    matchScore += 1.5;
  }

  //If the college is the student's preferred type or the student does not have a preference, increases the matchScore by 0.5
  if (student.getCollegeType == college.getCollegeType || student.getCollegeType == "NA") {
    matchScore += 0.5;
  }

  //Matches a student's desired price with the college's price. The closer the two prices the greater the result
  matchScore += 1 / (1 + Math.pow(Math.E, (-5 * (student.getPrice / college.getPrice)) + 3));

  return Math.round(matchScore * 100) / 100
}
