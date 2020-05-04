import React from 'react'

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message
    }

    greet() {
        return 'Hello ' + this.greeting
    }
}

class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName
    }
    move(distanceMeters: number = 0) {
        console.log(`${this.name} moved ${distanceMeters}m`)
    }
}

class Snake extends Animal {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(name: string) {
        super(name)
    }
    move(distanceMeters = 5) {
        console.log('Slithering......')
        super.move(distanceMeters)
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name)
    }

    move(distanceMeters = 45) {
        console.log('Galloping....')
        super.move(distanceMeters)
    }
}

class Animal1 {
    private name: string;
    constructor(thename: string) {
        this.name = thename
    }
}

class Rhino extends Animal1 {
    constructor() {
        super('rhnio')
    }
}

class Employee {
    private name: string;
    constructor(thename: string) {
        this.name = thename
    }
}

class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name
    }
}

class Employee1 extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    } 
}

// 直接使用参数属性来定义
class Octopus {
    constructor(readonly name: string, readonly numberOfLegs: number) {
    }
}

class Grid {
    static origin = { x: 0, y: 0}
    constructor(public scale: number) {
        this.scale = scale
    }
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}

class TestClass extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    render() {
        const greeter = new Greeter('world')
        console.log('初步尝试class', greeter.greet())

        console.log('类的继承')
        let sam = new Snake("Sammy the Python");
        let tom: Animal = new Horse("Tommy the Palomino");
        sam.move()
        tom.move(34)

        console.log('理解private')
        let animal = new Animal1('Goat')
        let rhnio = new Rhino()
        let employee = new Employee('Bob')
        console.log('animal和rhnio共享同一个私有变量name，而employee虽然也有一个私有变量name，但是这个name和animal中的name不是同一个')

        console.log('protected和private相比，protected的变量在派生类中依然可以访问')
        let howard = new Employee1("Howard", "Sales");
        console.log(howard.getElevatorPitch());
        // console.log(howard.name); // 错误s

        console.log('readonly修饰符')
        const ocator = new Octopus('ufsufmsufm', 4)
        // ocator.name = ';pf/ff;'

        console.log('静态属性，静态属性是挂载在类上的，而不是类的实例上面的')
        const grid1 = new Grid(1.0)
        const grid2 = new Grid(5.0)
        console.log('grid1>>', grid1.calculateDistanceFromOrigin({ x: 5, y: 9.5}))
        console.log('grid2>>>', grid2.calculateDistanceFromOrigin({ x: 8.4, y: 3.9}))
        return  (
            <div>测试class</div>
        )
    }
}
export default TestClass