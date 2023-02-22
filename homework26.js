class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
}
    getInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
    }
}


class Car {
    constructor(brand, model, year, number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
}

setOwner(owner) {
    if (owner.age < 18) {
        console.log('Владелец слишком молод что бы иметь авто!');
    } else {
        this.owner = owner;
    }
}

getInfo() {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год: ${this.year}, Гос. номер: ${this.number}`);
    this.owner.getInfo();
    }
}

const person1 = new Person('Maks', 28);
const person2 = new Person('Anna', 29);

const car1 = new Car('Mazda', 'CX-5', 2018, 'AA0003');
const car2 = new Car('Mazda', '6', 2013, 'АЕ0003');

car1.setOwner(person1);
car2.setOwner(person2);

car1.getInfo();
car2.getInfo();