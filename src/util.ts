
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function isNumber(x: any): x is number {
    return typeof x === 'number'
}

function isString(x: any): x is string {
    return typeof x === 'string'
}

export interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpace: number) {
        this.numSpace = numSpace
    }
    getPaddingString() {
        return Array(this.numSpace + 1).join(' ')
    }
}

class StringPadder implements Padder {
    constructor(private value: string) {
        this.value = value
    }
    getPaddingString() {
        return this.value
    }
}

function getRandomPadding() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder('fimjsmsjfj')
}

export { isFish, isString, isNumber, getRandomPadding, SpaceRepeatingPadder, StringPadder }

export function addNum() {
    return {
        type: 'ADD'
    }
}