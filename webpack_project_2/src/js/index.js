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
    enrollee.totalPoint = enrollee.ratingPoint + enrollee.schoolPoint;
    this.studentsArray.push(new Student(enrollee));
    this.studentsArray.sort((a, b) => b.totalPoint - a.totalPoint);
    this.studentsArray = this.studentsArray.map((student, index) => {
      if (index <= 4) {
        student.isSelfPayment = false;
      } else { student.isSelfPayment = true }
      return student;
    })
  }
  getStudents() {
    return this.studentsArray
  }
  getIsSelfPaymentStudents() {
    return this.studentsArray.filter(student => student.isSelfPayment)
  }
  getBudgetStudents() {
    return this.studentsArray.filter(student => !student.isSelfPayment)

  }
}
let khpiUniversity = new University("NTU 'KhPI'")
students.forEach(student => khpiUniversity.addStudent(student))
console.log('National Technical University – «Kharkiv Polytechnic Institute» :', khpiUniversity)
console.log('Get all students:', khpiUniversity.getStudents())
console.log('Students on budget education:', khpiUniversity.getBudgetStudents())

