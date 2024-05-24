class Student {
  constructor(id, fullName) {
    this.id = id;
    this.fullName = fullName;
    this.studentList = [];
    this.addStudent(this.id, this.fullName);
  }
  addStudent(id, name) {
    this.studentList.push({
      id: id,
      fullName: name,
    });
    console.log("New Student Added!");
  }
  showStudents() {
    this.studentList.map((student) =>
      console.log(`Student Id: ${student.id}, Student Name:${student.fullName}`)
    );
  }

  getStudentIfos(id) {
    const student = this.studentList.filter((student) => student.id === id);
    console.log(student);
  }
}

class Infos extends Student {
  constructor(id, fullName) {
    super(id, fullName);
    this.studentsMajor = [];
  }
  setMajor(id, major) {
    const newStudent = this.studentList.filter((student) => student.id === id);
    console.log(this.studentList);
  }

  showStudents() {
    this.studentsMajor.map((student) =>
      console.log(
        `Student Id: ${student.id}, Student Name:${student.fullName} Major:${student.major}`
      )
    );
  }
}
const studentObj = new Student(1234, "Jaloli");

const jaloliInfos = new Infos(1234, "Jaloli");
jaloliInfos.setMajor(1234, "english");
jaloliInfos.showStudents();
