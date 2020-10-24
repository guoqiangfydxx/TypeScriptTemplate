import React from 'react'
import { Button, Divider } from 'antd'
class TestRefsAndDom extends React.Component<any, any> {
  textInput: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);
    this.state = {}
    this.textInput = React.createRef()
  }

  focusTextInput = () => {
    this.textInput?.current?.focus()
  }

  render() {
    return (
      <div>
        <Divider>refs-dom</Divider>
        <input type='text' ref={this.textInput} />
        <Button onClick={this.focusTextInput}>测试</Button>
      </div>
    )
  }
}

class AutoFoucsTextIntput extends React.Component<any, any> {
  textRef: React.RefObject<any>;
  constructor(props: any) {
    super(props)
    this.textRef = React.createRef()
  }

  componentDidMount() {
    this.textRef?.current?.focusTextInput()
  }

  render() {
    return <TestRefsAndDom ref={this.textRef} />
  }
}
export default AutoFoucsTextIntput