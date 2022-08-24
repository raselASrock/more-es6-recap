const students = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 75,
        physics: 45,
        chemistry: 83,

    }
}

const marks = students.marks

const math = students.marks.math;
console.log(marks)
console.log(math)

const chemistry = students['marks']['chemistry']
console.log(chemistry)

const subject = 'math';
const subjectMarks = students.marks[subject];
console.log(subjectMarks);