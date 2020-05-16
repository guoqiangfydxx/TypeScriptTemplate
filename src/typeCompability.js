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
var Person = /** @class */ (function () {
    function Person(thename) {
        this.name = thename;
    }
    return Person;
}());
var p;
p = new Person('tom');
var y = { name: 'Alice', location: 'china' };
var x;
x = y;
var func1 = function () { return ({ name: 'slice' }); };
var func2 = function () { return ({ name: 'slice', location: 'America' }); };
func1 = func2;
var m = { a: 23, b: 54 };
var n = { a: 43, b: 89, c: 88 };
m = n;
// n = m
console.log('接口之间的兼容性就是成员少的兼容成员多的');
console.log('m里面的必填项a和b在n里面都可以找到，所以n可以被赋值为m，但是n里面必填的c在m里面找不到所以m不可以被赋值为n');
console.log('函数之间的兼容性：参数多的兼容参数少的');
var c = function () { return ({ name: 'Alice' }); };
var d = function () { return ({ name: 'Alice', location: 'Seattle' }); };
c = d; // OK
console.log('c>>>>>>>>>', c);
// func2 = func1
var TypeCompability = /** @class */ (function (_super) {
    __extends(TypeCompability, _super);
    function TypeCompability(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    TypeCompability.prototype.render = function () {
        console.log('类型兼容性');
        console.log('p>>', p);
        console.log('x要兼容y', x);
        return (React.createElement("div", null, "\u7C7B\u578B\u517C\u5BB9\u6027"));
    };
    return TypeCompability;
}(React.Component));
export default TypeCompability;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZUNvbXBhYmlsaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHlwZUNvbXBhYmlsaXR5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBTXpCO0lBRUksZ0JBQVksT0FBZTtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQTtJQUN2QixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBRUQsSUFBSSxDQUFRLENBQUE7QUFDWixDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7QUFFckIsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUMsQ0FBQTtBQUMzQyxJQUFJLENBQVEsQ0FBQTtBQUNaLENBQUMsR0FBRyxDQUFDLENBQUE7QUFFTCxJQUFJLEtBQUssR0FBSSxjQUFNLE9BQUEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFBO0FBQ3BDLElBQUksS0FBSyxHQUFJLGNBQU0sT0FBQSxDQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQTtBQUMzRCxLQUFLLEdBQUcsS0FBSyxDQUFBO0FBY2IsSUFBSSxDQUFDLEdBQU0sRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQTtBQUN6QixJQUFJLENBQUMsR0FBTSxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUE7QUFDaEMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNMLFFBQVE7QUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0REFBNEQsQ0FBQyxDQUFBO0FBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUNsQyxJQUFJLENBQUMsR0FBRyxjQUFNLE9BQUEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDO0FBQ2hDLElBQUksQ0FBQyxHQUFHLGNBQU0sT0FBQSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQztBQUVyRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQzVCLGdCQUFnQjtBQUNoQjtJQUE4QixtQ0FBZTtJQUN6Qyx5QkFBWSxLQUFVO1FBQXRCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBSWY7UUFIRyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBRVosQ0FBQTs7SUFDTCxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdkIsT0FBTyxDQUNILGtFQUFnQixDQUNuQixDQUFBO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWpCRCxDQUE4QixLQUFLLENBQUMsU0FBUyxHQWlCNUM7QUFDRCxlQUFlLGVBQWUsQ0FBQSJ9