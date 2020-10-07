import React from 'react'
import { createPortal } from 'react-dom'
import { Divider } from 'antd'
class TestPortal extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>
            <Divider>portal</Divider>
            <Modal>
                modal children
            </Modal>
        </div>
    }
}

class Modal extends React.Component<any, any> {
    el: HTMLDivElement;
    constructor(props: any) {
        super(props);
        this.el = document.createElement('div')
    }

    componentDidMount() {
        document.body.appendChild(this.el)
    }

    componentWillUnmount() {
        document.body.removeChild(this.el)
    }

    render() {
    return (createPortal(<div>this is a modal, {this.props.children}</div>, this.el))
    }
}
export default TestPortal