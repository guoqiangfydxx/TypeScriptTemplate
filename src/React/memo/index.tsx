import React from 'react'
import { Button, Divider } from 'antd'
const MyComponent = React.memo((props: { name: string }) => {
  console.log('render>>>>myComponent')
  return (<div>
    记忆函数组件
    {`name: ${props.name}`}
  </div>)
})

const MyComponent1 = (props: { name: string }) => {
  console.log('render-MyComponent1')
  return (
    <div>函数组件
      {`name: ${props.name}`}
    </div>
  )
}

class TestMemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      name: 'tom',
      count: 1
    }
  }

  // 当点击按钮的时候传递给子组件的props没有发生变化，此时使用React.memo会相对来说更加友好一点
  add = () => {
    this.setState((prevState: { count: number }) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return <div>
      <Divider>memo</Divider>
      <Button onClick={this.add}>Click me</Button>
      <MyComponent name={this.state.name} />
      <MyComponent1 name={this.state.name} />
      <p>MyComponent是不是一个React元素呢？{React.isValidElement(<div>f</div>) ? '是' : '否'}</p>
    </div>
  }
}
export default TestMemo