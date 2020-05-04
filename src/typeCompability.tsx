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