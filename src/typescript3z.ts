type grades = 1 | 2 | 3 | 4 | 5| 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined;

type Schueler = {
    firstName: string;
    lastName: string;
    age: number;
    grades:grades[];
}


const  schueler: Schueler = {
    firstName: "erster",
    lastName: "zweiter",
    age: 1,
    grades: [1, 2, 3, undefined],
}
const  schueler2: Schueler = {
    firstName: "ersterer",
    lastName: "zweiterer",
    age: 1,
    grades: [2, 3, 4, undefined],
}
const  schueler3: Schueler = {
    firstName: "erste",
    lastName: "zweite",
    age: 1,
    grades: [3, 4, 5, undefined],
}
const students = [schueler2, schueler3]

const gradesArray = schueler.grades.map(grade => {
    if (grade == undefined) {
        return "*";
    }
    else {
        return grade;
    }
})
console.log(schueler.firstName + " " + schueler.lastName + " " + schueler.age);
console.log("==============================");
console.log(gradesArray);

function output (studentsList: Schueler[]) {
    studentsList.forEach((s) => {
        const gradesArray = s.grades.map(grade => {
            if (grade == undefined) {
                return "*";
            }
            else {
                return grade;
            }
        })
        console.log(s.firstName + " " + s.lastName + " " + s.age);
        console.log("==============================");
        console.log(gradesArray)
    })
}
output(students)

