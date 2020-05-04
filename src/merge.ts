enum Color {
    red = 1,
    green = 2,
    blue = 4
}
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Color {
    export function mixColor(colorName: string) {
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
}

export { Color }