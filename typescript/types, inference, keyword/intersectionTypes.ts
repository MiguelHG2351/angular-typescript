interface Interface11 {
    prop1: number
}

interface Interface22 {
    prop2: number
}

type InterfaceMix2 = Interface11 & Interface22

const interaceMix: InterfaceMix2 = {
    prop1: 2,
    prop2: 5
}
