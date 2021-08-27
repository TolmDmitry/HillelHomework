import Animal from './animal';

export default class Cat extends Animal {
    constructor(nickname, food, location, isHomeless = true) {
        super(nickname, food, location);
        this.isHomeless = isHomeless;
    }
}