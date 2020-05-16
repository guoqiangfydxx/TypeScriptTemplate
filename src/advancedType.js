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
import { isString, isNumber, getRandomPadding, SpaceRepeatingPadder, StringPadder } from './util';
function add(x, y) {
    return x + (y || 0);
}
var C = /** @class */ (function () {
    function C(a) {
        this.a = a;
    }
    return C;
}());
function fixed(name) {
    function postfix(epithet) {
        return name.charAt(0) + ' .the ' + epithet;
    }
    name = name || 'Bob';
    return postfix('great');
}
var UIComponet = /** @class */ (function () {
    function UIComponet() {
    }
    UIComponet.prototype.animate = function (x, y, easing) {
        if (easing === 'ease-in') {
        }
        else if (easing === 'ease-out') {
        }
        else if (easing === 'ease-in-out') {
        }
    };
    return UIComponet;
}());
function fluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: 'tom',
    age: 64
};
var strings = fluck(person, ['name']);
var AdvancedType = /** @class */ (function (_super) {
    __extends(AdvancedType, _super);
    function AdvancedType(props) {
        var _this = _super.call(this, props) || this;
        _this.padLeft = function (value, padding) {
            if (typeof padding === 'number') {
                return Array(padding + 1).join(' ') + value;
            }
            else if (typeof padding === 'string') {
                return padding + value;
            }
            else {
                throw new Error("Expected string or number, got '" + padding + "'.");
            }
        };
        _this.state = {};
        return _this;
    }
    AdvancedType.prototype.render = function () {
        console.log('联合类型');
        console.log(this.padLeft('hello word', 'ufusu'));
        console.log('类型保护机制，类型保护就是一些表达式，它们会在运行时检查以确保在某个作用于里面的类型，其返回是一个类型谓词，谓词就是ParamName is Type这种形式');
        console.log('typeof 类型保护');
        console.log(isNumber('94994'), isNumber(6));
        console.log(isString('fjfjfnejr'), isString(true));
        console.log('instanceof 类型保护');
        var padder1 = getRandomPadding();
        if (padder1 instanceof SpaceRepeatingPadder) {
            console.log('padder1 是SpaceRepeatingPadder的实例');
        }
        if (padder1 instanceof StringPadder) {
            console.log('padder 是 StringPadder 的实例');
        }
        console.log('null类型, 开启了严格模式，null和undefined不能随意的赋值给其他类型');
        var s = 'foo';
        s = null;
        console.log('s>>>>, 这里使用联合类型', s);
        // s = undefined
        console.log('s不接受undefined');
        console.log('开启了严格模式后，可选参数默认就加上了 | undefined');
        console.log(add(1, 2));
        console.log(add(3));
        console.log(add(5, undefined));
        // console.log(add(10, null))
        console.log('null不能赋值给number或者是undefined');
        console.log('可选属性也是这样的');
        var c = new C(94838);
        c.a = 32;
        // c.b = null
        console.log('这里的b属性是联合类型： number | undefined');
        console.log('由于开启了严格模式之后，我们要使用null一般是使用联合类型来做的，但是这样的话在实际的代码中需要使用类型保护去除null，一般我们使用短路运算符，因为null在判断中一直是false。');
        console.log('如果上面的方法不起作用，那么就是用类型断言去除，就是添加!后缀');
        console.log(fixed('sjsmfjsm'));
        console.log(fixed(null));
        console.log('字符串字面量类型');
        var ui = new UIComponet();
        ui.animate(34, 67, 'ease-in');
        console.log('索引类型');
        console.log('索引类型查询操作符', 'keyof T', 'keyof T的结果为T上已知的公共属性名的联合');
        console.log('string>>>>>', strings);
        console.log('索引访问操作符， T[K],只要满足K extends keyof T');
        console.log('映射类型，按照某种规则将就旧的属性全都转换成新的属性');
        var person1 = {
            name: 'toeoe',
            age: 54
        };
        console.log('person-readonly>>>', person1);
        var person2 = {
            age: 45
        };
        console.log('person-partial>>>>', person2);
        return (React.createElement("div", null, "\u9AD8\u7EA7\u7C7B\u578B"));
    };
    return AdvancedType;
}(React.Component));
export default AdvancedType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWRUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2YW5jZWRUeXBlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBQ3pCLE9BQU8sRUFBVSxRQUFRLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFVLG9CQUFvQixFQUFFLFlBQVksRUFBQyxNQUFNLFFBQVEsQ0FBQTtBQUNoSCxTQUFTLEdBQUcsQ0FBRSxDQUFTLEVBQUUsQ0FBUztJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUN2QixDQUFDO0FBRUQ7SUFHSSxXQUFZLENBQVE7UUFDaEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBQ0wsUUFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBRUQsU0FBUyxLQUFLLENBQUMsSUFBbUI7SUFDOUIsU0FBUyxPQUFPLENBQUMsT0FBZTtRQUM1QixPQUFPLElBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLE9BQU8sQ0FBQTtJQUMvQyxDQUFDO0lBQ0QsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLENBQUE7SUFDcEIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDM0IsQ0FBQztBQUlEO0lBV0k7SUFFQSxDQUFDO0lBWkQsNEJBQU8sR0FBUCxVQUFRLENBQVMsRUFBRSxDQUFTLEVBQUUsTUFBYztRQUN4QyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7U0FFekI7YUFBTSxJQUFJLE1BQU0sS0FBSyxVQUFVLEVBQUU7U0FFakM7YUFBTSxJQUFJLE1BQU0sS0FBSyxhQUFhLEVBQUU7U0FFcEM7SUFDTCxDQUFDO0lBS0wsaUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQUVELFNBQVMsS0FBSyxDQUF1QixDQUFJLEVBQUMsS0FBVTtJQUNoRCxP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