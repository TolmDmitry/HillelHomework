import { students } from './students';

class Student {
  constructor({ name, surname, ratingPoint, schoolPoint, course, isSelfPayment = true }) {
    this.name = name;
    this.surname = surname;
    this.ratingPoint = ratingPoint;
    this.schoolPoint = schoolPoint;
    this.course = course;
    this.isSelfPayment = isSelfPayment;
    this.id = Student.createId();
  }
  static createId = (function () { return this.i++ }).bind({ i: 1 })
}
class University {
  constructor(name) {
    this.studentsArray = [];
    this.name = name;
  }
  addStudent(enrollee) {
    enrollee.forEach(student => {
      student.totalPoint = student.ratingPoint + student.schoolPoint;
    })
    enrollee.sort((a, b) => parseFloat(b.totalPoint) - parseFloat(a.totalPoint));
    enrollee.map((student, index) => {
      if (index <= 4) {
        student.isSelfPayment = false;
      }
      this.studentsArray.push(new Student(student))
    })
  }

  getStudents() {
    return this.studentsArray
  }
  getIsSelfPaymentStudents() {
    return this.studentsArray.filter(student => student.isSelfPayment === true)
  }
  getBudgetStudents() {
    return this.studentsArray.filter(student => student.isSelfPayment === false)

  }
}
let khpiUniversity = new University("NTU 'KhPI'")
khpiUniversity.addStudent(students);
console.log('National Technical University – «Kharkiv Polytechnic Institute» :', khpiUniversity)
console.log('Get all students:', khpiUniversity.getStudents())
console.log('Students on budget education:', khpiUniversity.getBudgetStudents())

