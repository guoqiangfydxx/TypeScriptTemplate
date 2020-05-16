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
var DecoratorTest = /** @class */ (function (_super) {
    __extends(DecoratorTest, _super);
    function DecoratorTest(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    DecoratorTest.prototype.render = function () {
        console.log('装饰器采用@expression这种形式，expression求值后必须为一个函数它会在运行时被调用，被装饰的声明信息作为参数传入');
        return (React.createElement("div", null, "\u88C5\u9970\u5668"));
    };
    return DecoratorTest;
}(React.Component));
export default DecoratorTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVjb3JhdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBQ3pCO0lBQTRCLGlDQUFlO0lBQ3ZDLHVCQUFZLEtBQVU7UUFBdEIsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FJZjtRQUhHLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFFWixDQUFBOztJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFBO1FBQ2hGLE9BQU8sQ0FDSCxzREFBYyxDQUNqQixDQUFBO0lBQ0wsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQWRELENBQTRCLEtBQUssQ0FBQyxTQUFTLEdBYzFDO0FBQ0QsZUFBZSxhQUFhLENBQUEifQ==