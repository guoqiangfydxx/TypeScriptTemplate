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
import React, { Component } from 'react';
import { Button } from 'antd';
var p1 = { x: 1, y: 10 };
var a = [1, 2, 3, 4];
var ro = a;
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var VariableDeclaration = /** @class */ (function (_super) {
    __extends(VariableDeclaration, _super);
    function VariableDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.test = function (_a) {
            var first = _a[0], second = _a[1];
            console.log('first>>>>', first);
            console.log('second>>>>>', second);
        };
        _this.printLabel = function (labelValue) {
            console.log('label>>>>', labelValue.label);
        };
        _this.createSquare = function (config) {
            var newSquare = { color: 'white', area: 100 };
            if (config.color) {
                newSquare.color = config.color;
            }
            if (config.width) {
                newSquare.area = config.width * config.width;
            }
            console.log(newSquare);
            return newSquare;
        };
        _this.editPoint = function () {
        };
        _this.testFunc = function () {
            console.log(mySearch('sdfdfdsfsdfdsfsdfdsfdsfds', 'sfsdfdsfdsfs'));
        };
        return _this;
    }
    VariableDeclaration.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(Button, { onClick: this.test.bind(this, [3434, 'variable']) }, "\u6D4B\u8BD5"),
            React.createElement(Button, { onClick: function () { return _this.printLabel({ label: 'testLabel' }); } }, "print"),
            React.createElement(Button, { onClick: this.createSquare.bind(this, { color: 'red' }) }, "square"),
            React.createElement(Button, { onClick: this.editPoint }, "Point"),
            React.createElement(Button, { onClick: this.testFunc }, "\u51FD\u6570\u7C7B\u578B")));
    };
    return VariableDeclaration;
}(Component));
export default VariableDeclaration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGVEZWNsYXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhcmlhYmxlRGVjbGFyYXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFPLE9BQU8sQ0FBQTtBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFBO0FBWTdCLElBQU0sRUFBRSxHQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUE7QUFDaEMsSUFBTSxDQUFDLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUNoQyxJQUFNLEVBQUUsR0FBMEIsQ0FBQyxDQUFBO0FBSW5DLElBQUksUUFBb0IsQ0FBQTtBQUN4QixRQUFRLEdBQUcsVUFBQyxNQUFjLEVBQUUsU0FBaUI7SUFDekMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxPQUFPLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUE7QUFPRDtJQUFpRCx1Q0FBUztJQUExRDtRQUFBLHFFQTZDQztRQTVDRyxXQUFLLEdBQUcsRUFFUCxDQUFBO1FBRUQsVUFBSSxHQUFHLFVBQUMsRUFBaUM7Z0JBQWhDLGFBQUssRUFBRSxjQUFNO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ3RDLENBQUMsQ0FBQTtRQUVELGdCQUFVLEdBQUcsVUFBQyxVQUF3QjtZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUMsQ0FBQyxDQUFBO1FBRUQsa0JBQVksR0FBRyxVQUFDLE1BQW9CO1lBQ2hDLElBQUksU0FBUyxHQUFHLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFDLENBQUE7WUFDMUMsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNkLFNBQVMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTthQUNqQztZQUNELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDZCxTQUFTLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTthQUMvQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDdEIsT0FBTyxTQUFTLENBQUE7UUFDcEIsQ0FBQyxDQUFBO1FBRUQsZUFBUyxHQUFHO1FBRVosQ0FBQyxDQUFBO1FBRUQsY0FBUSxHQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsMkJBQTJCLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQTtRQUN0RSxDQUFDLENBQUE7O0lBYUwsQ0FBQztJQVhHLG9DQUFNLEdBQU47UUFBQSxpQkFVQztRQVRHLE9BQU8sQ0FDSDtZQUNJLG9CQUFDLE1BQU0sSUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLG1CQUFhO1lBQ3RFLG9CQUFDLE1BQU0sSUFBQyxPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFDLENBQUMsRUFBckMsQ0FBcUMsWUFBZ0I7WUFDNUUsb0JBQUMsTUFBTSxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsYUFBaUI7WUFDL0Usb0JBQUMsTUFBTSxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxZQUFnQjtZQUMvQyxvQkFBQyxNQUFNLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLCtCQUFlLENBQzNDLENBQ1QsQ0FBQTtJQUNMLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUE3Q0QsQ0FBaUQsU0FBUyxHQTZDekQifQ==