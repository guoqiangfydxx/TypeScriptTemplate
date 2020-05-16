function isFish(pet) {
    return pet.swim !== undefined;
}
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpace) {
        this.numSpace = numSpace;
        this.numSpace = numSpace;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpace + 1).join(' ');
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
function getRandomPadding() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder('fimjsmsjfj');
}
export { isFish, isString, isNumber, getRandomPadding, SpaceRepeatingPadder, StringPadder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUEsU0FBUyxNQUFNLENBQUMsR0FBZ0I7SUFDNUIsT0FBUSxHQUFZLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsQ0FBTTtJQUNwQixPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQTtBQUNoQyxDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsQ0FBTTtJQUNwQixPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQTtBQUNoQyxDQUFDO0FBTUQ7SUFDSSw4QkFBb0IsUUFBZ0I7UUFBaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtJQUM1QixDQUFDO0lBQ0QsK0NBQWdCLEdBQWhCO1FBQ0ksT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFFRDtJQUNJLHNCQUFvQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUN0QixDQUFDO0lBQ0QsdUNBQWdCLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBRUQsU0FBUyxnQkFBZ0I7SUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUM3RixDQUFDO0FBRUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxDQUFBIn0=