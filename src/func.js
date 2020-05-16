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
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var newAdd;
newAdd = function (a, b) { return a + b; };
var TestFunc = /** @class */ (function (_super) {
    __extends(TestFunc, _super);
    function TestFunc(props) {
        var _this = _super.call(this, props) || this;
        _this.myAdd = function (x, y) {
            return (x + y);
        };
        _this.buildName = function (firstName, lastName) {
            return firstName + ' ' + lastName;
        };
        _this.buildName1 = function (firstName, lastName) {
            if (lastName) {
                return firstName + ' ' + lastName;
            }
            else {
                return firstName;
            }
        };
        _this.buildName3 = function (firstName, lastName) {
            if (firstName === void 0) { firstName = 'will'; }
            return firstName + ' ' + lastName;
        };
        _this.buildName4 = function (firstName) {
            var restNames = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                restNames[_i - 1] = arguments[_i];
            }
            return firstName + restNames.join('');
        };
        _this.state = {};
        return _this;
    }
    TestFunc.prototype.render = function () {
        console.log('newAdd>>>>', newAdd(6, 8));
        console.log('为函数增加定义类型');
        console.log(this.myAdd(89208.52934, 989.53353));
        console.log('可选参数和默认参数');
        // this.buildName('tom')
        // this.buildName('tom', 'ief', 'usjd')
        // 默认ts认为你传入的参数和定义的参数是一样的，不能少也不能多参数
        console.log(this.buildName('udsodo', '48fjisi'));
        console.log(this.buildName1('tom'));
        console.log(this.buildName1('umsifmjsfs', 'iwkdfndj'));
        // console.log(this.buildName1('fuussd', 'fiskfsf', 'fsf'))
        console.log(this.buildName3('Bob', 'Adams'));
        console.log(this.buildName3(undefined, 'fidfisk'));
        console.log('剩余函数');
        console.log('fismfjsofns', 'roepekfe', 'fiksjff', '03okidnsjfk s');
        console.log('this');
        var deck = {
            suits: ["hearts", "spades", "clubs", "diamonds"],
            cards: Array(52),
            createCardPicker: function () {
                var _this = this;
                // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
                return function () {
                    var pickedCard = Math.floor(Math.random() * 52);
                    var pickedSuit = Math.floor(pickedCard / 13);
                    return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
                };
            }
        };
        var cardPicker = deck.createCardPicker();
        var pickedCard = cardPicker();
        console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
        console.log('函数重载');
        console.log(pickCard(15));
        var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
        console.log(pickCard(myDeck));
        return React.createElement("div", null, "\u51FD\u6570");
    };
    return TestFunc;
}(React.Component));
export default TestFunc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZ1bmMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFhekIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUd0RCxTQUFTLFFBQVEsQ0FBQyxDQUFNO0lBQ3BCLElBQUksT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ3RCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLFVBQVUsQ0FBQztLQUNyQjtJQUNELHdDQUF3QztTQUNuQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRTtRQUMzQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0tBQ3BEO0FBQ0wsQ0FBQztBQUVELElBQUksTUFBd0MsQ0FBQTtBQUM1QyxNQUFNLEdBQUcsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsRUFBTCxDQUFLLENBQUE7QUFFeEI7SUFBdUIsNEJBQWU7SUFDbEMsa0JBQVksS0FBVTtRQUF0QixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUlmO1FBRUQsV0FBSyxHQUFHLFVBQUMsQ0FBUyxFQUFFLENBQVM7WUFDekIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNsQixDQUFDLENBQUE7UUFFRCxlQUFTLEdBQUcsVUFBQyxTQUFpQixFQUFFLFFBQWdCO1lBQzVD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