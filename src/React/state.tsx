import React from 'react'
import { Button, Divider } from 'antd'
class TestState extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            count: 0,
            a: false,
            b: false
        }
    }

    componentDidMount() {
        // 在原生
        document.getElementById('btn')?.addEventListener('click', this.increase)
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('异步执行结果', this.state.count)
        })
        console.log('count, 同步执行完结果', this.state.count) 
    }

    handleClick = () => {
        this.increase()
    }

    handleClick2 = () => {
        // setState在setTimeout中是同步执行的，而不是异步执行的
        setTimeout(() => {
            this.increase()
        }, 50)
    }

    handleClick3 = () => {
        this.setState((preState: { count: number }) => {
            return {
                count: preState.count + 1
            }
        })
    }

    handleClick4 = () => {
        // setState会对同一周期的多个操作进行批量处理，所以这样的话就会导致后面的setState()的值会覆盖前面的setState()的值，所以其只增加了1，可以使用更新函数依赖前一个state来解决这个问题
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick5 = () => {
        this.setState({
            a:true
        })
        this.setState({
            b: true
        })
    }

    render() {
        const { count, a, b } = this.state
        return (
            <div>
                <Divider>react-state</Divider>
                <Button onClick={this.handleClick}>Click me</Button>
                <Button onClick={this.handleClick2}>setTimeout Click</Button>
                <button id='btn'>原型button按钮点击</button>
                <Button onClick={this.handleClick3}>state更新函数</Button>
                <Button onClick={this.handleClick4}>在一个函数中多次调用setState，看会执行几次</Button>
                <Button onClick={this.handleClick5}>批量更新a和b</Button>
                <div>{`count: ${count}`}</div>
                <div>{`a: ${a}; b: ${b}`}</div>
            </div>
        )
    }
}
export default TestState