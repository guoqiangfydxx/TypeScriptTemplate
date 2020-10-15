import React from 'react'
import { Button, Divider } from 'antd'

const FancyButton = React.forwardRef((props: any, ref: any) => (
  <Button ref={ref}>{props.children}</Button>
))

class TestRef extends React.Component<any, any> {
  ref: any
  constructor(props: any) {
    super(props)
    this.state = {}
    this.ref = React.createRef()
  }

  render() {
    console.log('ref>>>', this.ref)
    return <div>
      <Divider>ref</Divider>
      <FancyButton ref={this.ref}>Click me</FancyButton>
    </div>
  }
}
export default TestRef