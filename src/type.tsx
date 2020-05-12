import React from 'react'
interface Foo {
    bar : number
}
class Type extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render(){
        console.log('强类型语言不允许改变变量的数据类型，除非进行强制类型转换')
        console.log('弱类型语言的变量可以被赋值为不同的类型')
        console.log('静态类型语言就是在编译阶段就确定所有变量的类型')
        console.log('动态类型语言就是在执行阶段才能确定所有变量的类型')
        const foo = {} as Foo
        foo.bar = 1
        return (
            <div>强类型和弱类型语言</div>
        )
    }
}
export default Type