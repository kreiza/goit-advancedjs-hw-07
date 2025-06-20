// Ключ
class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

// Людина
class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

// Дім
abstract class House {
    protected door: boolean = false;
    private tenants: Person[] = [];

    constructor(protected key: Key) {}

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('Person came in');
        } else {
            console.log('The door is closed');
        }
    }

    abstract openDoor(key: Key): void;
}

// Мій дім
class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Door is now open');
        } else {
            console.log('Wrong key');
        }
    }
}

// Сценарій
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};