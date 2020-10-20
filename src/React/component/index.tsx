import React from 'react'
import { Divider } from 'antd'
class TestComponent extends React.Component<any, any> {
  render() {
    return <div>
      <Divider>Component</Divider>
      <span className='test'>{false}</span></div>
  }
}
export default TestComponent