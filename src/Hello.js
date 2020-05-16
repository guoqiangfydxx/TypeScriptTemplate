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
import * as React from 'react';
import { Button, Input } from 'antd';
import './hello.less';
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Pink"] = 4] = "Pink";
    Color[Color["Blue"] = 9] = "Blue";
})(Color || (Color = {}));
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        var _this = _super.call(this, props) || this;
        _this.onIncrement = function () { return _this.updateEnthusiasm(_this.state.currentEnthusiasm + 1); };
        _this.onDecrement = function () { return _this.updateEnthusiasm(_this.state.currentEnthusiasm - 1); };
        _this.state = {
            currentEnthusiasm: props.enthusiasmLevel || 1
        };
        return _this;
    }
    Hello.prototype.updateEnthusiasm = function (currentEnthusiasm) {
        this.setState({ currentEnthusiasm: currentEnthusiasm });
    };
    Hello.prototype.render = function () {
        var isDone = false;
        console.log('isDone', isDone);
        var decLiteral = 3434;
        console.log('decLiteral>>>>', decLiteral);
        var firsrName = 'Geno';
        var age = 43;
        var sentence = "Hello my name is " + firsrName + ", I will be " + (age + 1) + " years old next month";
        console.log('sentence>>>>', sentence);
        // 定义数组
        var list = [1, 2, 4];
        var list2 = [1, 2, 3, 5.545];
        console.log('list>>>>', list);
        console.log('list2>>>>', list2);
        // 定义一个元组类型的数据
        var x;
        // Initialize it
        x = ['hello', 10]; // OK
        console.log('tuple>>>>>', x);
        // 定义枚举类型,enum
        var c = Color.Blue;
        var colorName = Color[4];
        console.log('c>>>>>', c);
        console.log('colorName>>>>>', colorName);
        // void类型的数据
        var unuseable = undefined;
        console.log('unuseable', unuseable);
        var name = this.props.name;
        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (React.createElement("div", { className: 'hello' },
            React.createElement("div", { className: 'greeting' },
                "Hello ",
                name + getExclamationMarks(this.state.currentEnthusiasm)),
            React.createElement(Button, { type: 'primary', onClick: this.onIncrement }, "+"),
            React.createElement(Button, { onClick: this.onDecrement }, "-"),
            React.createElement(Input, null)));
    };
    return Hello;
}(React.Component));
export default Hello;
function getExclamationMarks(numChars) {
    return Array(numChars + 1).join('!');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIZWxsby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBQzlCLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFBO0FBQ3BDLE9BQU8sY0FBYyxDQUFBO0FBU3JCLElBQUssS0FBcUM7QUFBMUMsV0FBSyxLQUFLO0lBQUcsK0JBQU8sQ0FBQTtJQUFFLGlDQUFRLENBQUE7SUFBRSxpQ0FBUSxDQUFBO0FBQUMsQ0FBQyxFQUFyQyxLQUFLLEtBQUwsS0FBSyxRQUFnQztBQUMxQztJQUFvQix5QkFBNkI7SUFDN0MsZUFBWSxLQUFZO1FBQXhCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBSWY7UUFFRCxpQkFBVyxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsRUFBdkQsQ0FBdUQsQ0FBQztRQUM1RSxpQkFBVyxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsRUFBdkQsQ0FBdUQsQ0FBQztRQU54RSxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGVBQWUsSUFBSSxDQUFDO1NBQ2hELENBQUE7O0lBQ0wsQ0FBQztJQUtELGdDQUFnQixHQUFoQixVQUFpQixpQkFBeUI7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGlCQUFpQixtQkFBQSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUgsc0JBQU0sR0FBTjtRQUNJLElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQTtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FB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