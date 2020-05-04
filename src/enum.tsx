import React from 'react'
enum Direaction {
    up = 1,
    down,
    right,
    left
}

interface testObj {
    recipent: string,
    message: Direaction
}

enum E {
    X, Y, Z
}

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    kind: ShapeKind.Circle,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
}

class TestEnum extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    response = (config: testObj) : string => {
        return config.recipent + ' ' + config.message
    }

    f = (obj: { X: number}) => {
        console.log(obj['X'])
    }

    render() {
        console.log('枚举')
        console.log(this.response({recipent: 'fjsmjmfjfsf', message: Direaction.left}))

        console.log('运行时状态')
        this.f(E)
        console.log('反向映射', E[0])
        return (
            <div>枚举</div>
        )
    }
}
export default TestEnum