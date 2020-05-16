var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace
(function (Color) {
    function mixColor(colorName) {
        if (colorName === "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName === "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName === "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName === "cyan") {
            return Color.green + Color.blue;
        }
    }
    Color.mixColor = mixColor;
})(Color || (Color = {}));
export { Color };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFLLEtBSUo7QUFKRCxXQUFLLEtBQUs7SUFDTiwrQkFBTyxDQUFBO0lBQ1AsbUNBQVMsQ0FBQTtJQUNULGlDQUFRLENBQUE7QUFDWixDQUFDLEVBSkksS0FBSyxLQUFMLEtBQUssUUFJVDtBQUNELDJEQUEyRDtBQUMzRCxXQUFVLEtBQUs7SUFDWCxTQUFnQixRQUFRLENBQUMsU0FBaUI7UUFDdEMsSUFBSSxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQ3hCLE9BQU8sS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ2xDO2FBQ0ksSUFBSSxTQUFTLEtBQUssT0FBTyxFQUFFO1lBQzVCLE9BQU8sS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDL0M7YUFDSSxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDakM7YUFDSSxJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDM0IsT0FBTyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBYmUsY0FBUSxXQWF2QixDQUFBO0FBQ0wsQ0FBQyxFQWZTLEtBQUssS0FBTCxLQUFLLFFBZWQ7QUFFRCxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUEifQ==