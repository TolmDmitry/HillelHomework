import { students } from './students';

class Student {
  constructor({ name, surname, ratingPoint, schoolPoint, course, isSelfPayment = true, totalPoint = 0 }) {
    this.name = name;
    this.surname = surname;
    this.ratingPoint = ratingPoint;
    this.schoolPoint = schoolPoint;
    this.course = course;
    this.isSelfPayment = isSelfPayment;
    this.totalPoint = totalPoint;
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
      return {
        ...student,
        isSelfPayment: index > 4
      }
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
khpiUniversity.addStudent({
  name: 'dima',
  surname: 'dimov',
  ratingPoint: 1400,
  schoolPoint: 1200,
  course: 3,
})
console.log('National Technical University – «Kharkiv Polytechnic Institute» :', khpiUniversity)
console.log('Get all students:', khpiUniversity.getStudents())
console.log('Students on budget education:', khpiUniversity.getBudgetStudents())

