class Student {
  constructor(age, gpa, greScore, desiredDegree, collegeType, price) {
    this.age = age;
    this.gpa = gpa;
    this.greScore = greScore;
    this.desiredDegree = desiredDegree.toLowerCase();
    this.collegeType = collegeType.toLowerCase();
    this.price = price;
  }

  get getAge() {
    return this.age;
  }

  get getGPA() {
    return this.gpa;
  }

  get getGREScore() {
    return this.greScore;
  }

  get getDesiredDegree() {
    return this.desiredDegree;
  }

  get getCollegeType() {
    return this.collegeType;
  }

  get getPrice() {
    return this.price;
  }
}

class College {
  constructor(name, averageGpa, averageGre, bestDegrees, collegeType, price) {
    this.name = name;
    this.averageGpa = averageGpa;
    this.averageGre = averageGre;
    this.bestDegrees = bestDegrees.map(function(value) {
      return value.toLowerCase();
    });
    this.collegeType = collegeType.toLowerCase();
    this.price = price;
  }

  getInfo() {
    return {
      name: this.name,
      averageGpa: this.averageGpa,
      averageGre: this.averageGre,
      bestDegrees: this.bestDegrees,
      collegeType: this.collegeType,
      price: this.price
    };
  }

  get getName() {
    return this.name;
  }

  get getAverageGpa() {
    return this.averageGpa;
  }

  get getAverageGre() {
    return this.averageGre;
  }

  get getBestDegrees() {
    return this.bestDegrees;
  }

  get getCollegeType() {
    return this.collegeType;
  }

  get getPrice() {
    return this.price;
  }
}
