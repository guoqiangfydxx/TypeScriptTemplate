var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello ' + this.greeting;
    };
    return Greeter;
}());
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceMeters) {
        if (distanceMeters === void 0) { distanceMeters = 0; }
        console.log(this.name + " moved " + distanceMeters + "m");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceMeters) {
        if (distanceMeters === void 0) { distanceMeters = 5; }
        console.log('Slithering......');
        _super.prototype.move.call(this, distanceMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceMeters) {
        if (distanceMeters === void 0) { distanceMeters = 45; }
        console.log('Galloping....');
        _super.prototype.move.call(this, distanceMeters);
    };
    return Horse;
}(Animal));
var Animal1 = /** @class */ (function () {
    function Animal1(thename) {
        this.name = thename;
    }
    return Animal1;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, 'rhnio') || this;
    }
    return Rhino;
}(Animal1));
var Employee = /** @class */ (function () {
    function Employee(thename) {
        this.name = thename;
    }
    return Employee;
}());
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee1.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee1;
}(Person));
// 直接使用参数属性来定义
var Octopus = /** @class */ (function () {
    function Octopus(name, numberOfLegs) {
        this.name = name;
        this.numberOfLegs = numberOfLegs;
    }
    return Octopus;
}());
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var TestClass = /** @class */ (function (_super) {
    __extends(TestClass, _super);
    function TestClass(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    TestClass.prototype.render = function () {
        var greeter = new Greeter('world');
        console.log('初步尝试class', greeter.greet());
        console.log('类的继承');
        var sam = new Snake("Sammy the Python");
        var tom = new Horse("Tommy the Palomino");
        sam.move();
        tom.move(34);
        console.log('理解private');
        var animal = new Animal1('Goat');
        var rhnio = new Rhino();
        var employee = new Employee('Bob');
        console.log('animal和rhnio共享同一个私有变量name，而employee虽然也有一个私有变量name，但是这个name和animal中的name不是同一个');
        console.log('protected和private相比，protected的变量在派生类中依然可以访问');
        var howard = new Employee1("Howard", "Sales");
        console.log(howard.getElevatorPitch());
        // console.log(howard.name); // 错误s
        console.log('readonly修饰符');
        var ocator = new Octopus('ufsufmsufm', 4);
        // ocator.name = ';pf/ff;'
        console.log('静态属性，静态属性是挂载在类上的，而不是类的实例上面的');
        var grid1 = new Grid(1.0);
        var grid2 = new Grid(5.0);
        console.log('grid1>>', grid1.calculateDistanceFromOrigin({ x: 5, y: 9.5 }));
        console.log('grid2>>>', grid2.calculateDistanceFromOrigin({ x: 8.4, y: 3.9 }));
        return (React.createElement("div", null, "\u6D4B\u8BD5class"));
    };
    return TestClass;
}(React.Component));
export default TestClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGFzcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUV6QjtJQUVJLGlCQUFZLE9BQWU7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7SUFDM0IsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFDSSxPQUFPLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ25DLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFFRDtJQUVJLGdCQUFZLE9BQWU7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7SUFDdkIsQ0FBQztJQUNELHFCQUFJLEdBQUosVUFBSyxjQUEwQjtRQUExQiwrQkFBQSxFQUFBLGtCQUEwQjtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxJQUFJLGVBQVUsY0FBYyxNQUFHLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBRUQ7SUFBb0IseUJBQU07SUFDdEIscUVBQXFFO0lBQ3JFLGVBQVksSUFBWTtlQUNwQixrQkFBTSxJQUFJLENBQUM7SUFDZixDQUFDO0lBQ0Qsb0JBQUksR0FBSixVQUFLLGNBQWtCO1FBQWxCLCtCQUFBLEVBQUEsa0JBQWtCO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUMvQixpQkFBTSxJQUFJLFlBQUMsY0FBYyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBb0IsTUFBTSxHQVN6QjtBQUVEO0lBQW9CLHlCQUFNO0lBQ3RCLGVBQVksSUFBWTtlQUNwQixrQkFBTSxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQsb0JBQUksR0FBSixVQUFLLGNBQW1CO1FBQW5CLCtCQUFBLEVBQUEs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