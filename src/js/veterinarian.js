import Person from './person';


export default class Veterinarian extends Person {
    #diagnosis;
    constructor(firstName, lastName, hospital) {
        super(firstName, lastName);
        this.hospital = hospital;
        this.#diagnosis = { ill: 'ill', healthy: 'healthy' };
    }
    getFullName() {
        return ` ${super.getFullName()} (${this.hospital.name})`;
    }
    _setDiagnosis(animal) {
        if (!isNaN(animal.weight) && animal.weight > 20) {
            return {
                diagnosis: this.#diagnosis.ill,
                info: 'overweight',
            };
        }
        if (animal.food === 'feed') {
            animal.changeFood();
            return {
                diagnosis: this.#diagnosis.ill,
                info: ` Now ${animal.nickname} eats ${animal.food}`,
            }
        }
        if (animal.isHomeless) {
            const findHomeResult = this.hospital.findHome(animal);
            return findHomeResult.status === 'restricted' ? ({ diagnosis: this.#diagnosis.ill, info: findHomeResult.message }) : ({ diagnosis: this.#diagnosis.healthy, info: `Change home. Now ${findHomeResult.name} have a new friend - ${animal.nickname} ` })
        }
        return { diagnosis: this.#diagnosis.healthy, info: 'This animal is healh' }

    }
    treatAnimal(animal) {
        const diagnos = this._setDiagnosis(animal);
        if (diagnos.diagnosis === this.#diagnosis.ill) {
            this.hospital.addAnimal(animal);
        }
        return {
            info: `${animal.nickname} from ${animal.location}`,
            fullDiagnos: `${diagnos.diagnosis}: ${diagnos.info}`,
        }
    }
}