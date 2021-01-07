class Person {
    private edad: number
    private altura: number
    private dni: string
    
    constructor(edad: number, altura: number, dni: string) {
        this.edad = edad
        this.altura = altura
        this.dni = dni
    }

}

class Student extends Person {
    private matricula

    constructor(edad: number, altura: number, dni: string, matricula: string) {
        super(edad, altura, dni)
        this.matricula = matricula
    }
}

let person: Person = new Person(27, 1.69, '621531')
let student: Student = new Student(27, 1.69, '621531', 'csfgeg')

person = student
// student = person

// Identifica las shapes de cada uno

// Toda persona no es un alumno y que todo alumno es una persona
