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
function AnotherComponent(prop) {
    return React.createElement("div", null, "this is the targetName-----" + prop.name);
}
;
function ComponentFoo(prop) {
    return React.createElement(AnotherComponent, { name: prop.name });
}
function MainButton(prop) {
    return React.createElement("div", null,
        "\u6D4B\u8BD5jsx-element",
        prop.children);
}
var TestJSx = /** @class */ (function (_super) {
    __extends(TestJSx, _super);
    function TestJSx(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    TestJSx.prototype.render = function () {
        return (React.createElement("div", null,
            "\u6D4B\u8BD5jsx",
            React.createElement("br", null),
            React.createElement(ComponentFoo, { name: 'lviwkifsj', X: 534, Y: 488 }),
            MainButton({ children: React.createElement("button", null, "\u6309\u94AE") })));
    };
    return TestJSx;
}(React.Component));
export default TestJSx;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdEpzeC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3RKc3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFPekIsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFvQjtJQUMxQyxPQUFPLGlDQUFNLGdDQUE4QixJQUFJLENBQUMsSUFBTSxDQUFPLENBQUE7QUFDakUsQ0FBQztBQUFBLENBQUM7QUFDRixTQUFTLFlBQVksQ0FBQyxJQUFhO0lBQy9CLE9BQU8sb0JBQUMsZ0JBQWdCLElBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUksQ0FBQztBQUNqRCxDQUFDO0FBTUQsU0FBUyxVQUFVLENBQUMsSUFBb0I7SUFDeEMsT0FBTzs7UUFBbUIsSUFBSSxDQUFDLFFBQVEsQ0FBTyxDQUFBO0FBQzlDLENBQUM7QUFFRDtJQUFzQiwyQkFBZTtJQUNqQyxpQkFBWSxLQUFVO1FBQXRCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBSWY7UUFIRyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBRVosQ0FBQTs7SUFDTCxDQUFDO0lBRUQsd0JBQU0sR0FBTjtRQUNJLE9BQU8sQ0FDSDs7WUFFSSwrQkFBTTtZQUNOLG9CQUFDLFlBQVksSUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBSTtZQUNoRCxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsbURBQW1CLEVBQUMsQ0FBQyxDQUMzQyxDQUNULENBQUE7SUFDTCxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUFsQkQsQ0FBc0IsS0FBSyxDQUFDLFNBQVMsR0FrQnBDO0FBQ0QsZUFBZSxPQUFPLENBQUEifQ==