function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = Array(25).fill(null);

this.getAge = function () {
    const now = new Date();
    const year = now.getFullYear();
    return year - this.birthYear;

};

this.getAverageGrade = function () {
    const sum = this.grades.reduce((acc, cur) => acc + cur, 0);
    return sum / this.grades.length;
};

this.present = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = true;
    }
};

this.absent = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = false;
    }
};

this.summary = function () {
    const attendanceRatio = this.attendance.filter(Boolean).length / this.attendance.length;
    const avgGrade = this.getAverageGrade();
        if (avgGrade > 90 && attendanceRatio > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || attendanceRatio > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    };
}

const student1 = new Student("Maks", "Bogutskiy", 2000);
const student2 = new Student("Anna", "Bogutskiy", 2001);

student1.grades = [80, 90, 95, 85, 90];
student2.grades = [90, 85, 92, 88, 91];

student1.present();
student1.present();
student1.absent();
student2.present();
student2.present();
student2.present();

console.log(`${student1.firstName} ${student1.getAge()}`);
console.log(`${student2.firstName} ${student2.getAge()}`);
console.log(`${student1.firstName} ${student1.getAverageGrade()}`);
console.log(`${student2.firstName} ${student2.getAverageGrade()}`);

console.log(`${student1.firstName} ${student1.attendance.filter(Boolean).length}`);
console.log(`${student2.firstName} ${student2.attendance.filter(Boolean).length}`);

console.log(`${student1.firstName}: ${student1.summary()}`);
console.log(`${student2.firstName}: ${student2.summary()}`);
