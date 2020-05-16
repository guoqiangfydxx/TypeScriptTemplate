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
import { Color } from './merge';
/// <reference path="merge.ts" />
var box = { width: 44, height: 93, scale: 9 };
var DeclareMerge = /** @class */ (function (_super) {
    __extends(DeclareMerge, _super);
    function DeclareMerge(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    DeclareMerge.prototype.render = function () {
        console.log('merge>>>>>>>>', Color.mixColor('yellow'));
        console.log('Color>>>>>', Color, typeof Color, Color.toString());
        return (React.createElement("div", null, "\u58F0\u660E\u5408\u5E76"));
    };
    return DeclareMerge;
}(React.Component));
export default DeclareMerge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyZU1lcmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVjbGFyZU1lcmdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBQ3pCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUE7QUFVL0IsaUNBQWlDO0FBQ2pDLElBQU0sR0FBRyxHQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQTtBQUNuRDtJQUEyQixnQ0FBZTtJQUN0QyxzQkFBWSxLQUFVO1FBQXRCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBSWY7UUFIRyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBRVosQ0FBQTs7SUFDTCxDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsT0FBTyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFDaEUsT0FBTyxDQUNILDREQUFlLENBQ2xCLENBQUE7SUFDTCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBMkIsS0FBSyxDQUFDLFNBQVMsR0FlekM7QUFDRCxlQUFlLFlBQVksQ0FBQSJ9