import React from 'react'
class DecoratorTest extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log('装饰器采用@expression这种形式，expression求值后必须为一个函数它会在运行时被调用，被装饰的声明信息作为参数传入')
        return (
            <div>装饰器</div>
        )
    }
}
export default DecoratorTest