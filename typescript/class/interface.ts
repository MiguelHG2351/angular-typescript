type Dni = number

interface Persona {
    altura?: number,
    edad: number,
    nombre: string,
    apellido: string,
    dni: Dni
}

const persona: Persona = {
    edad: 16,
    nombre: 'XD',
    apellido: 'XDD',
    dni: 1215642
}
