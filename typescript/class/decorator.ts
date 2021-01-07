function log(target, key) {
    console.log(`${key} se ha llamado`)
}

class People {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    @log
    sayMyName() {
        return this.name
    }
}

const people: People = new People('Miguel')
people.sayMyName()
