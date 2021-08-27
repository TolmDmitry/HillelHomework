export default class Hospital {
    #illAnimals;
    #findingPetsPeople;
    constructor(name) {
        this.name = name;
        this.#findingPetsPeople = [];
        this.#illAnimals = [];
    }
    getAnimals() {
        return this.#illAnimals;
    }
    getFindingPetsPeople() {
        return this.#findingPetsPeople;
    }
    addAnimal(animal) {
        return this.#illAnimals.push(animal);
    }
    addPeople(person) {
        return this.#findingPetsPeople = this.#findingPetsPeople.concat(person);
    }
    findHome(animal) {
        if (this.#illAnimals.find(illAnimal => illAnimal.nickname === animal.nickname)) {
            return {
                status: 'restricted',
                message: `We need to heal ${animal.nickname} firstly`,
            };
        } else {
            const randomPersonId = Math.floor(Math.random() * (this.#findingPetsPeople.length - 0) + 0);
            const person = this.#findingPetsPeople.splice(randomPersonId, 1)[0];
            return {
                status: 'success',
                name: `${person.firstName} ${person.lastName}`,
            };
        }
    }
}