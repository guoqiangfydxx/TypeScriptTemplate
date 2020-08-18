import React from 'react'
class LetTest extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        // 主要块级作用于内部存在let命令，那么其所声明的变量就绑定这个区域，不在受外部的影响
        // ES6规定块级作用于中的函数声明语句类似于let，在块级作用域外不可访问，但是为了兼容老代码的运行，所以ES6特别规定：函数声明类似于var，函数声明会被提升到全局作用域或者函数作用域的顶部；同时函数声明还会被提升到块级作用域的顶部
        // if (true) {
        //     temp = '352'
        //     let temp
        //     console.info('temp>>>>', temp)
        // }
        let [foo, [[bar], baz]] = [232, [[6343], 903]]
        console.log(foo, bar, baz)
        const [x, ,y] = [23,34,34]
        console.log(x,y)
        const [head, ...tail] = [1,2,3,4]
        console.log('head>>>>>', head, tail)
        // 不完全解构
        const [a, b] = [23,534,252]
        console.log('a>>', a, b)
        let [c = 1] = [undefined]
        console.log('c>>>>', c)
        let [d = 1] = [null]
        console.log('d>>>>', d)
        return (
            <div>
                let
            </div>
        )
    }
}
export default LetTest