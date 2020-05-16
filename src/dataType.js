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
import { Button } from 'antd';
import * as Test from './test';
var Color;
(function (Color) {
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Red"] = 9] = "Red";
    Color[Color["Blue"] = 94] = "Blue";
})(Color || (Color = {}));
var mySearch;
mySearch = function (str, sub) {
    var result = str.indexOf(sub);
    return result > -1;
};
var myArray;
myArray = ['95930', '9484890'];
var myDireactory;
myDireactory = [8293993, 82232323];
var square;
square = {
    color: 'red',
    sideLength: 849,
    penWidth: 943
};
var DataType = /** @class */ (function (_super) {
    __extends(DataType, _super);
    function DataType(props) {
        var _this = _super.call(this, props) || this;
        _this.printLabel = function (labelObject) {
            console.log(labelObject.label);
        };
        _this.createSquare = function (config) {
            var newSquare = { width: 600, color: 'white' };
            if (config.color) {
                newSquare.color = config.color;
            }
            if (config.width) {
                newSquare.width = config.width;
            }
            return newSquare;
        };
        _this.state = {};
        return _this;
    }
    DataType.prototype.componentDidMount = function () {
        for (var i = 0; i < 10; i++) {
            (function (i) {
                setTimeout(function () {
                    console.log(i);
                }, 100 * i);
            })(i);
        }
    };
    DataType.prototype.render = function () {
        var isDone = true;
        console.log('布尔值', isDone);
        var name = 'tom';
        console.log('name', name);
        name = 'jerry';
        console.log('after-name', name);
        var list = [1, 2, 3];
        console.log('同一种元素的数组', list);
        var arr = [2, 3, 94];
        console.log('创建数组的第二种方式数组泛型', arr);
        var temp = ['irkfjmf', 99];
        console.log('元组就是一种特殊的数组，而且数组中的各项不需要强制保证是同一种数据类型', temp);
        console.log('枚举类型', Color.Green);
        console.log('枚举类型根据值获取对应的名字', Color[9]);
        console.log('Any和Object这两种数据类型的比较：');
        var notSure = 4;
        notSure.toFixed(2);
        // notSure.ifItExists()
        var prettySure = 4;
        prettySure.toFixed(2);
        console.log('void类型数据的值只能被赋值undefined');
        var unusable = undefined;
        console.log('void', unusable);
        console.log('never类型是那些总是会抛出异常错误的函数或者根本就不会有返回值的箭头函数或许函数表达是的返回类型，never也可以是变量类型，其表示被永不为真的表达式所约束的时候');
        console.log('类型断言');
        var someValue = 'this is a string';
        var strLength = someValue.length;
        console.log('字符串的长度', strLength);
        console.log('这里是使用as语法来表述类型断言，而另外一种尖括号在tsx文件中不能使用');
        var myObj = { size: 10, label: 'this is a label' };
        this.printLabel(myObj);
        console.log(this.createSquare({ color: 'blank' }));
        var point = { x: 34, y: 90 };
        console.log('point>>>', point);
        var a = [5, 7, 8];
        var a1 = a;
        console.log('a1是一个不可变的数组，不支持任何改变数组的防范', a1);
        console.log('额外的属性检查');
        // const mySquare = this.createSquare({culour: 8494,color: 'red'} as squareConfig)
        var mySquare = this.createSquare({ coluor: 'red', width: 686 });
        console.log('或者使用索引签名', mySquare);
        console.log('函数类型适用于抽离出来的单独函数，而在tsx中的函数直接根据入参和出参的类型就已经对这个函数进行了强校验');
        mySearch('84900mvr', '94994');
        console.log('可索引的类型,可索引的类型有一个索引签名，其描述了对象索引的类型，还有对应的索引值返回的类型');
        console.log('myArray', myArray[1]);
        console.log(myDireactory);
        console.log('类类型');
        console.log('继承类型,和类一样，接口也具有可以相互继承');
        console.log('继承单个接口', square);
        console.log('继承多个接口', square);
        var c = Test.getCounter();
        c(49303);
        c.reset();
        c.interval = 5.0;
        console.log('c>>>>>>', c);
        return (React.createElement(Button, null, "\u6D4B\u8BD5"));
    };
    return DataType;
}(React.Component));
export default DataType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhVHlwZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUN6QixPQUFPLEVBQUUsTUFBTSxFQUFHLE1BQU0sTUFBTSxDQUFBO0FBQzlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sUUFBUSxDQUFBO0FBQzlCLElBQUssS0FBdUM7QUFBNUMsV0FBSyxLQUFLO0lBQUcsbUNBQVMsQ0FBQTtJQUFFLCtCQUFPLENBQUE7SUFBRSxrQ0FBUyxDQUFBO0FBQUMsQ0FBQyxFQUF2QyxLQUFLLEtBQUwsS0FBSyxRQUFrQztBQW1CNUMsSUFBSSxRQUFvQixDQUFBO0FBQ3hCLFFBQVEsR0FBRyxVQUFDLEdBQVcsRUFBRSxHQUFXO0lBQ2hDLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDL0IsT0FBTyxNQUFNLEdBQUksQ0FBQyxDQUFDLENBQUE7QUFDdkIsQ0FBQyxDQUFBO0FBS0QsSUFBSSxPQUFvQixDQUFBO0FBQ3hCLE9BQU8sR0FBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQTtBQVE3QixJQUFJLFlBQThCLENBQUE7QUFDbEMsWUFBWSxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBZWxDLElBQUksTUFBYyxDQUFBO0FBQ2xCLE1BQU0sR0FBRztJQUNMLEtBQUssRUFBRSxLQUFLO0lBQ1osVUFBVSxFQUFFLEdBQUc7SUFDZixRQUFRLEVBQUUsR0FBRztDQUNoQixDQUFBO0FBQ0Q7SUFBdUIsNEJBQWU7SUFDbEMsa0JBQVksS0FBVTtRQUF0QixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUlmO1FBRUQsZ0JBQVUsR0FBRyxVQUFDLFdBQXlCO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xDLENB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