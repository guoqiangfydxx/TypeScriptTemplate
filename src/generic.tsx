import React from 'react'
function identity<T>(arg:T): T{
    return arg
}

class TestGeneric extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log(identity('myString'))
        console.log(identity<number>(799393939))
        return <div>
            泛型
        </div>
    }
}
export default TestGeneric