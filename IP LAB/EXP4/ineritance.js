class Vehicle {
    constructor(type, color, age) {
        this.type = type;
        this.color = color;
        this.age = age;
    }
}

class Car extends Vehicle {
    constructor(type, color, age, engine) {
        super(type, color, age);
        this.engine = engine;
    }
    print() {
        console.log(`Type: ${this.type}\n
        Color : ${this.color}\n
        Age : ${this.age}\n
        Engine : ${this.engine}`);
    }
}

let soham = new Car("Sedan","Red","10 years","V8")
soham.print();

