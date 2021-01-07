let a: string = 'Miguel'

a = 'XD'

// a = 2 error, no es asignable, type inference

let b:number = 4
// b = a NO XD
b = b

const number1 = 10

b += number1;

function suma(n1: number, n2: number) {
    return n1 + n2
}

/**
 * 
 * @param n1 {Number} number one
 * @param n2 {Number} number two
 */
function suma2(n1: number, n2: number) {
    return n1 + n2
}

suma(1, 2)

let anyValue: any = 1
anyValue = ''

//Types
type dni = number
let dniNumber: dni = 55

// types: string, number, object, array, etc
