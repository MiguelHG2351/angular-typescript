type SumaParameter = string | number
type sumaReturnType = string | number

function Suma(num1:SumaParameter, num2:SumaParameter): sumaReturnType {
    return Number(num1) + Number(num2)
}

interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
}

type InterfaceMix = Interface1 | Interface2

const interfaceMix: InterfaceMix = {
    prop1: 5,
}
