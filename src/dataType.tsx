import React from 'react'
import { Button  } from 'antd'
import * as Test from './test'
enum Color { Green = 5, Red = 9, Blue = 94 }
interface labeledValue {
    label: string
}

interface squareConfig {
    width?: number,
    color?: string,
    [propName: string]: any
}

interface Point {
    readonly x: number,
    readonly y: number
}

interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = (str: string, sub: string) :boolean => {
    const result = str.indexOf(sub)
    return result  > -1
}

interface StringArray {
    [index: number]: string
}
let myArray: StringArray 
myArray= ['95930', '9484890']

interface NumberDireactory {
    [index: number]: number,
    length: number,
    // name: string
}

let myDireactory: NumberDireactory
myDireactory = [8293993, 82232323]
// myDireactory.name = '8kjjkwrhwj'

interface Shape {
    color: string
}

interface PenStrokre {
    penWidth: number
}

interface Square extends Shape, PenStrokre {
    sideLength: number
}

let square: Square
square = {
    color: 'red',
    sideLength: 849,
    penWidth: 943
}
class DataType extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    printLabel = (labelObject: labeledValue): void => {
        console.log(labelObject.label)
    }

    createSquare = (config: squareConfig): { color: string, width: number }  => {
        const newSquare = { width: 600, color: 'white'}
        if (config.color) {
            newSquare.color = config.color
        }
        if(config.width) {
            newSquare.width = config.width
        }
        return newSquare
    }

    componentDidMount() {
        for (var i =0; i< 10; i++) {
            (function(i) {
                setTimeout(function () {
                    console.log(i)
                },100 * i)
            })(i)
        }
    }

    render() {
        const isDone: boolean = true
        console.log('布尔值', isDone)
        let name: string = 'tom'
        console.log('name', name)
        name = 'jerry'
        console.log('after-name', name)
        const list: number[] = [1, 2,3]
        console.log('同一种元素的数组', list)
        const arr: Array<number> = [2,3,94]
        console.log('创建数组的第二种方式数组泛型', arr)
        const temp: [string, number] = ['irkfjmf', 99]
        console.log('元组就是一种特殊的数组，而且数组中的各项不需要强制保证是同一种数据类型', temp)
        console.log('枚举类型', Color.Green)
        console.log('枚举类型根据值获取对应的名字', Color[9])
        console.log('Any和Object这两种数据类型的比较：')
        let notSure: any = 4
        notSure.toFixed(2)
        // notSure.ifItExists()

        const prettySure: number = 4
        prettySure.toFixed(2)
        console.log('void类型数据的值只能被赋值undefined')
        let unusable: void = undefined;
        console.log('void', unusable)
        console.log('never类型是那些总是会抛出异常错误的函数或者根本就不会有返回值的箭头函数或许函数表达是的返回类型，never也可以是变量类型，其表示被永不为真的表达式所约束的时候')
        console.log('类型断言')

        const someValue: any = 'this is a string'
        const strLength: number = (someValue as string).length
        console.log('字符串的长度', strLength)
        console.log('这里是使用as语法来表述类型断言，而另外一种尖括号在tsx文件中不能使用')
        
        const myObj = { size: 10, label: 'this is a label'}
        this.printLabel(myObj)
        console.log(this.createSquare({ color: 'blank'}))

        const point: Point = { x: 34, y: 90}
        console.log('point>>>', point)
        const a:number[] = [5,7,8]
        const a1: ReadonlyArray<number> = a
        console.log('a1是一个不可变的数组，不支持任何改变数组的防范', a1)

        console.log('额外的属性检查')
        // const mySquare = this.createSquare({culour: 8494,color: 'red'} as squareConfig)
        const mySquare = this.createSquare({ coluor: 'red', width: 686})
        console.log('或者使用索引签名', mySquare)

        console.log('函数类型适用于抽离出来的单独函数，而在tsx中的函数直接根据入参和出参的类型就已经对这个函数进行了强校验')
        mySearch('84900mvr', '94994')

        console.log('可索引的类型,可索引的类型有一个索引签名，其描述了对象索引的类型，还有对应的索引值返回的类型')
        console.log('myArray', myArray[1])
        console.log(myDireactory)

        console.log('类类型')

        console.log('继承类型,和类一样，接口也具有可以相互继承')
        console.log('继承单个接口', square)
        console.log('继承多个接口', square)

        let c = Test.getCounter();
        c(49303);
        c.reset();
        c.interval = 5.0;
        console.log('c>>>>>>', c)
        return (
            <Button>测试</Button>
        )
    }
}
export default DataType