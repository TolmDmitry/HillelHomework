export default class Hospital {
    constructor(name) {
        this.name = name;
        this.#illAnimals = [];
        this.#findingPetsPeople = [];
    }
    getAnimals() {
        return this.#illAnimalsl;
    }
    getFindingPetsPeople() {
        return this.#findingPetsPeople;
    }
    addAnimal(animal) {
        this.#illAnimals.push(animal);
    }
    addPeople(person) {
        this.#findingPetsPeople.push(person);
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