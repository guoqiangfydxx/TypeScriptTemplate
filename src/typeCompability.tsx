import React from 'react'

interface Named {
    name: string
}

class Person {
    name: string;
    constructor(thename: string) {
        this.name = thename
    }
}

let p: Named
p = new Person('tom')

let y = { name: 'Alice', location: 'china'}
let x: Named
x = y

let func1  = () => ({name: 'slice'})
let func2  = () => ( { name: 'slice', location: 'America'})
func1 = func2


interface X {
    a: number,
    b: number
}

interface Y {
    a: number,
    b: number,
    c: number
}

let m: X = {a: 23, b: 54}
let n: Y = {a: 43, b: 89, c: 88}
m = n
// n = m
console.log('接口之间的兼容性就是成员少的兼容成员多的')
console.log('m里面的必填项a和b在n里面都可以找到，所以n可以被赋值为m，但是n里面必填的c在m里面找不到所以m不可以被赋值为n')
console.log('函数之间的兼容性：参数多的兼容参数少的')
let c = () => ({name: 'Alice'});
let d = () => ({name: 'Alice', location: 'Seattle'});

c = d; // OK
console.log('c>>>>>>>>>', c)
// func2 = func1
class TypeCompability extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log('类型兼容性')
        console.log('p>>', p)

        console.log('x要兼容y', x)
        return (
            <div>类型兼容性</div>
        )
    }
}
export default TypeCompability