import React, { Component }  from 'react'
import { Button } from 'antd'
interface labelldValue {
    label?: string
}
interface SquareConfig {
    color?: string,
    width?: number
}
interface Point {
    readonly x: number,
    readonly y: number
}
const p1: Point = { x: 1, y: 10}
const a: number[] = [1, 2, 3, 4]
const ro: ReadonlyArray<number> = a
interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = (source: string, subString: string): boolean => {
    let result = source.search(subString);
    return result > -1;
}

interface NumberDictionary {
    [index: string]: number,
    length: number,
    name: number
}
export default class VariableDeclaration extends Component {
    state = {

    }

    test = ([first, second]: [number, string]) => {
        console.log('first>>>>', first)
        console.log('second>>>>>', second)
    }

    printLabel = (labelValue: labelldValue) => {
        console.log('label>>>>', labelValue.label)
    }

    createSquare = (config: SquareConfig): { color: string, area: number} => {
        let newSquare = {color: 'white',area: 100}
        if (config.color) {
            newSquare.color = config.color
        }
        if (config.width) {
            newSquare.area = config.width * config.width
        }
        console.log(newSquare)
        return newSquare
    }

    editPoint = () => {
        
    }

    testFunc = () => {
        console.log(mySearch('sdfdfdsfsdfdsfsdfdsfdsfds', 'sfsdfdsfdsfs'))
    }

    render() {
        return (
            <div>
                <Button onClick={this.test.bind(this, [3434, 'variable'])}>测试</Button>
                <Button onClick={() => this.printLabel({label: 'testLabel'})}>print</Button>
                <Button onClick={this.createSquare.bind(this, { color: 'red'})}>square</Button>
                <Button onClick={this.editPoint}>Point</Button>
                <Button onClick={this.testFunc}>函数类型</Button>
            </div>
        )
    }
}