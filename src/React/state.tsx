import React from 'react'
import { Button, Divider } from 'antd'
class TestState extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            count: 0
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

    render() {
        const { count } = this.state
        return (
            <div>
                <Divider></Divider>
                <Button onClick={this.handleClick}>Click me</Button>
                <Button onClick={this.handleClick2}>setTimeout Click</Button>
                <button id='btn'>原型button按钮点击</button>
                <Button onClick={this.handleClick3}>state更新函数</Button>
                <div>{`count: ${count}`}</div>
            </div>
        )
    }
}
export default TestState