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
var Type = /** @class */ (function (_super) {
    __extends(Type, _super);
    function Type(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Type.prototype.render = function () {
        console.log('强类型语言不允许改变变量的数据类型，除非进行强制类型转换');
        console.log('弱类型语言的变量可以被赋值为不同的类型');
        console.log('静态类型语言就是在编译阶段就确定所有变量的类型');
        console.log('动态类型语言就是在执行阶段才能确定所有变量的类型');
        var foo = {};
        foo.bar = 1;
        return (React.createElement("div", null, "\u5F3A\u7C7B\u578B\u548C\u5F31\u7C7B\u578B\u8BED\u8A00"));
    };
    return Type;
}(React.Component));
export default Type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR5cGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFJekI7SUFBbUIsd0JBQWU7SUFDOUIsY0FBWSxLQUFVO1FBQXRCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBRWY7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTs7SUFDbkIsQ0FBQztJQUVELHFCQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUE7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFDdkMsSUFBTSxHQUFHLEdBQUcsRUFBUyxDQUFBO1FBQ3JCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ1gsT0FBTyxDQUNILDBGQUFvQixDQUN2QixDQUFBO0lBQ0wsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBakJELENBQW1CLEtBQUssQ0FBQyxTQUFTLEdBaUJqQztBQUNELGVBQWUsSUFBSSxDQUFBIn0=