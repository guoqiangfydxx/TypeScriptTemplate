import React from 'react'
interface FooProp {
    name: string;
    X: number;
    Y: number;
}

function AnotherComponent(prop: {name: string}) {
    return <div>{`this is the targetName-----${prop.name}`}</div>
};
function ComponentFoo(prop: FooProp) {
    return <AnotherComponent name={prop.name} />;
}

interface ClickableProps {
    children: JSX.Element[] | JSX.Element
}

function MainButton(prop: ClickableProps): JSX.Element {
return <div>测试jsx-element{prop.children}</div>
}

class TestJSx extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                测试jsx
                <br />
                <ComponentFoo name='lviwkifsj' X={534} Y={488} />
                {MainButton({ children: <button>按钮</button>})}
            </div>
        )
    }
}
export default TestJSx