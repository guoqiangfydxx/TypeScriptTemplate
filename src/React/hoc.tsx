import React from 'react'
import { Divider } from 'antd'
const hocWrapper  = (WrappedComponent: React.ComponentType<any>) => (props: any) => {
    return (
        <div className='outer-line'>

            <WrappedComponent {...props} />
        </div>
    )
}

class MyComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        console.log('props>>>>>', this.props)
        return (
            <div>MyComponent</div>
        )
    }
}

class HocTest extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        const Hoc = hocWrapper(MyComponent)
        return <div>
            <Divider>hoc</Divider>
            <Hoc name='test' />
        </div>
    }
}
export default HocTest