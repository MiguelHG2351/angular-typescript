function logParameters(target: any, propertyName: any, index: any) {
    const metadataKey = `log_${propertyName}_parameters`
    if(Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index)
    } else {
        target[metadataKey] = [index]
    }
}

class P {
    greet(@logParameters message: string): string {
        return message;
    }
}

const p = new P()
p.greet('Hola Mundo')
