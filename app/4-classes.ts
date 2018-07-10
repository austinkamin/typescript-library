class Person {
    firstName: string;
    lastName: string;
}

let austin: Person = new Person();

austin.firstName = 'Austin';
austin.lastName = 'Kamin';

let fullName = `${austin.firstName} ${austin.lastName}`;
console.log(fullName);

let mason: Person = newPerson();
mason.firstName = 'Mason';
mason.lastName = 'Seiler';

console.log(mason);

class Game {
    constructor(name: string, maker: string) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

let battleship: Game = new Game("Battleship", "Hasbro");

class Vehicle {
    type: string;
    make: string;
    model: string;
    year: number;
    runs: boolean;
    topSpeed: number;
}

class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();

myCar.isSelfDriving = false;
myCar.type = 'car';
myCar.make = 'Honda';
myCar.model = 'Accord';
