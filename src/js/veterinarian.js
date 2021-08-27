import Person from './person';


export default class Veterinarian extends Person {
    constructor(firstName, lastName, hospital) {
        super(firstName, lastName);
        this.hospital = hospital;
        this.#diagnosis = { ill: 'ill', healthy: 'healthy' };
    }
    getFullName() {
        return ` ${super.getFullName()} (${this.hospital.name})`;
    }
    _setDiagnosis(animal) {
        return {
            diagnosis: `${this.#diagnosis.ill}`,
            info: `${diagnosMessage}`,
        };

    }
    treatAnimal(animal) {
        const diagnos = this._setDiagnosis(animal);
        return diagnos.diagnosis === this.#diagnosis[ill] ? {} : {}



    }
}