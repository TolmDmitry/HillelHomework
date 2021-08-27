import Cat from './cat';
import Dog from './dog';
import Person from './person';
import Veterinarian from './veterinarian';
import Hospital from './hospital';

function main() {
    let cat1 = new Cat('Bob', 'meal with rice', 'location1', true);
    let cat2 = new Cat('Alina', 'meal with rice', 'location2', false);
    let cat3 = new Cat('Mur', 'feed', 'home', 'location3', false);

    let dog1 = new Dog('Frank', 'meal with rice', 'location4', 10);
    let dog2 = new Dog('Rex', 'feed', 'location5', 25);
    let dog3 = new Dog('Muhtar', 'feed', 'home', 'location6', 4);

    let person1 = new Person('Stepan', 'Ivanov');
    let person2 = new Person('Ivan', 'Petrov');
    let person3 = new Person('Kolya', 'Sidorov');


    let hospital = new Hospital('Hospital 1');
    hospital.addPeople([person1, person2, person3]);

    let veterinar = new Veterinarian('Nikolay', 'Popov', hospital)

    let conclusion = veterinar.treatAnimal(cat1);

    console.group(veterinar.getFullName());
    console.log(conclusion.info);
    console.log(conclusion.fullDiagnos);
    console.log('Ill animals :', hospital.getAnimals());
    console.log('People without pets:', hospital.getFindingPetsPeople())
    console.groupEnd();

}

main();