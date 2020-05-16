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
function identity(arg) {
    return arg;
}
var TestGeneric = /** @class */ (function (_super) {
    __extends(TestGeneric, _super);
    function TestGeneric(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    TestGeneric.prototype.render = function () {
        console.log(identity('myString'));
        console.log(identity(799393939));
        return React.createElement("div", null, "\u6CDB\u578B");
    };
    return TestGeneric;
}(React.Component));
export default TestGeneric;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdlbmVyaWMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDekIsU0FBUyxRQUFRLENBQUksR0FBSztJQUN0QixPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUM7QUFFRDtJQUEwQiwrQkFBZTtJQUNyQyxxQkFBWSxLQUFVO1FBQXRCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBSWY7UUFIRyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBRVosQ0FBQTs7SUFDTCxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQVMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUN4QyxPQUFPLGdEQUVELENBQUE7SUFDVixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBMEIsS0FBSyxDQUFDLFNBQVMsR0FleEM7QUFDRCxlQUFlLFdBQVcsQ0FBQSJ9