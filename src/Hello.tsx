import * as React from 'react'
import { Button, Input } from 'antd'
import './hello.less'
export interface Props {
    name: string,
    enthusiasmLevel?: number
}

interface State {
    currentEnthusiasm: number
}
enum Color { Red = 1, Pink = 4, Blue = 9 }
class Hello extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            currentEnthusiasm: props.enthusiasmLevel || 1
        }
    }

    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

    updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({ currentEnthusiasm });
      }

    render() {
        let isDone: boolean = false
        console.log('isDone', isDone)
        let decLiteral: number = 3434
        console.log('decLiteral>>>>', decLiteral)
        let firsrName: string = 'Geno'
        let age:number = 43
        let sentence = `Hello my name is ${firsrName}, I will be ${age + 1} years old next month`
        console.log('sentence>>>>', sentence)
        // 定义数组
        const list: number[] = [1, 2, 4]
        const list2: Array<number> = [1,2,3,5.545]
        console.log('list>>>>', list)
        console.log('list2>>>>', list2)
        // 定义一个元组类型的数据
        let x: [string, number];
        // Initialize it
        x = ['hello', 10]; // OK
        console.log('tuple>>>>>', x)
        // 定义枚举类型,enum
        const c: Color = Color.Blue
        const colorName: string = Color[4]
        console.log('c>>>>>', c)
        console.log('colorName>>>>>', colorName)
        // void类型的数据
        const unuseable: void = undefined
        console.log('unuseable', unuseable)
        const { name } = this.props
        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
          }
        return (
            <div className='hello'>
                <div className='greeting'>
                Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
                </div>
                <Button type='primary' onClick={this.onIncrement}>+</Button>
                <Button onClick={this.onDecrement}>-</Button>
                <Input/> 
            </div>
        )
    }
}
export default Hello

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!')
}