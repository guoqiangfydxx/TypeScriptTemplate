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
var Direaction;
(function (Direaction) {
    Direaction[Direaction["up"] = 1] = "up";
    Direaction[Direaction["down"] = 2] = "down";
    Direaction[Direaction["right"] = 3] = "right";
    Direaction[Direaction["left"] = 4] = "left";
})(Direaction || (Direaction = {}));
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    kind: ShapeKind.Circle,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
};
var TestEnum = /** @class */ (function (_super) {
    __extends(TestEnum, _super);
    function TestEnum(props) {
        var _this = _super.call(this, props) || this;
        _this.response = function (config) {
            return config.recipent + ' ' + config.message;
        };
        _this.f = function (obj) {
            console.log(obj['X']);
        };
        _this.state = {};
        return _this;
    }
    TestEnum.prototype.render = function () {
        console.log('枚举');
        console.log(this.response({ recipent: 'fjsmjmfjfsf', message: Direaction.left }));
        console.log('运行时状态');
        this.f(E);
        console.log('反向映射', E[0]);
        return (React.createElement("div", null, "\u679A\u4E3E"));
    };
    return TestEnum;
}(React.Component));
export default TestEnum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVudW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDekIsSUFBSyxVQUtKO0FBTEQsV0FBSyxVQUFVO0lBQ1gsdUNBQU0sQ0FBQTtJQUNOLDJDQUFJLENBQUE7SUFDSiw2Q0FBSyxDQUFBO0lBQ0wsMkNBQUksQ0FBQTtBQUNSLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBT0QsSUFBSyxDQUVKO0FBRkQsV0FBSyxDQUFDO0lBQ0YsbUJBQUMsQ0FBQTtJQUFFLG1CQUFDLENBQUE7SUFBRSxtQkFBQyxDQUFBO0FBQ1gsQ0FBQyxFQUZJLENBQUMsS0FBRCxDQUFDLFFBRUw7QUFFRCxJQUFLLFNBR0o7QUFIRCxXQUFLLFNBQVM7SUFDViw2Q0FBTSxDQUFBO0lBQ04sNkNBQU0sQ0FBQTtBQUNWLENBQUMsRUFISSxTQUFTLEtBQVQsU0FBUyxRQUdiO0FBWUQsSUFBSSxDQUFDLEdBQVc7SUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07SUFDdEIsNkJBQTZCO0lBQzdCLE1BQU0sRUFBRSxHQUFHO0NBQ2QsQ0FBQTtBQUVEO0lBQXVCLDRCQUFlO0lBQ2xDLGtCQUFZLEtBQVU7UUFBdEIsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FJZjtRQUVELGNBQVEsR0FBRyxVQUFDLE1BQWU7WUFDdkIsT0FBTyxNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFBO1FBQ2pELENBQUMsQ0FBQTtRQUVELE9BQUMsR0FBRyxVQUFDLEdBQWlCO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDekIsQ0FBQyxDQUFBO1FBWEcsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUVaLENBQUE7O0lBQ0wsQ0FBQztJQVVELHlCQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUE7UUFFL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekIsT0FBTyxDQUNILGdEQUFhLENBQ2hCLENBQUE7SUFDTCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUEzQkQsQ0FBdUIsS0FBSyxDQUFDLFNBQVMsR0EyQnJDO0FBQ0QsZUFBZSxRQUFRLENBQUEifQ==