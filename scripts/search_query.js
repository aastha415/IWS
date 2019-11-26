function fetch(age, gpa, greScore, desiredDegree, collegeType, price) {

  var info = {
    age: document.getElementById("age").value,
    gpa: document.getElementById("gpa").value,
    greScore: document.getElementById("greScore").value,
    desiredDegree: document.getElementById("desiredDegree").value,
    collegeType: document.getElementById("collegeType").value,
    price: document.getElementById("price").value
  };

  var errors = [];

  if (isNaN(info.age)) {
    errors.push("'Age' only accepts 'number' type.");
    document.getElementById("age").value = "";
  }
  if (isNaN(info.gpa)) {
    errors.push("'GPA' only accepts 'number' type.");
    document.getElementById("gpa").value = "";
  } else {
    const value = Number(info.gpa);
    if (value > 5.0 || value < 0.0) {
      errors.push("GPA Score's possible score range is typically 0.0 - 5.0.");
      document.getElementById("gpa").value = "";
    }
  }
  if (isNaN(info.greScore)) {
    errors.push("'GRE Score' only accepts 'number' type.");
    document.getElementById("greScore").value = "";
  } else {
    const value = Number(info.greScore);
    if (value > 340 || value < 260) {
      errors.push("GRE Score's possible score range is 260 - 340.");
      document.getElementById("greScore").value = "";
    }
  }
  if (typeof info.desiredDegree != "string") {
    errors.push("'Desired Degree' only accepts 'string' type.");
    document.getElementById("desiredDegree").value = "";
  } else if (info.desiredDegree == "") {
    errors.push("'Desired Degree' requires an input.");
  }
  if (typeof info.collegeType != "string") {
    errors.push("'Desired College Type' only accepts 'string' type.");
    document.getElementById("collegeType").value = "";
  } else if (info.collegeType == "") {
    errors.push("'Desired College type' requires an input.");
  }
  if (isNaN(info.price)) {
    errors.push("'Price' only accepts 'number' type.");
    document.getElementById("price").value = "";
  }
  if (errors.length > 0) {
    var errorMsg = "";
    for (var index = 0; index < errors.length; index++) {
      errorMsg += (errors[index] + "\n");
    }
    errorMsg += "\nPlease reenter.";
    throw errorMsg;
  }

  var student = new Student(info.age, info.gpa, info.greScore, info.desiredDegree, info.collegeType, info.price);

  var matchedColleges = {};

  for (var index = 0; index < colleges.length; index++) {
    const matchedScore = matchStudentWithCollege(student, colleges[index]);
    matchedColleges[colleges[index].name] = matchedScore;
  }

  var sortable = Object.keys(matchedColleges).map(function (key) {
    return [key, matchedColleges[key]];
  });

  sortable.sort(function (first, second) {
    return second[1] - first[1];
  });

  var result = "";

  for (var index = 0; index < 2; index++) {
    // result += (sortable[index][0] + ", " + sortable[index][1] + "<br />");
    result += (sortable[index][0] + ", " + sortable[index][1] + "\n");
  }

  alert(result);
}

// function appendResult(name) {
//   var p = document.createElement("p");
//   var br = document.createElement("br");
//   p.class = "resultObjects";
//   $(".resultObjects").css("position", "absolute");
//   $(".resultObjects").css("top", "470px");
//   $(".resultObjects").css("left", "100px");
//   var node = p.appendChild(document.createTextNode(name));
//
//   document.getElementById("results").appendChild(node);
//   document.getElementById("results").appendChild(br);
// }
