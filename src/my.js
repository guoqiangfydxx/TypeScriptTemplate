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
var MyJsx = /** @class */ (function (_super) {
    __extends(MyJsx, _super);
    /**
     * @param {any} props
     */
    function MyJsx(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    MyJsx.prototype.render = function () {
        return (React.createElement("div", null, 'this is a test'));
    };
    return MyJsx;
}(React.Component));
export default MyJsx;
//# sourceMappingURL=my.js.map