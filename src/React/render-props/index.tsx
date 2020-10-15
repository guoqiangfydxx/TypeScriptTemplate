import React from 'react'
import { Divider } from 'antd'
import cat from './4339.jpg'

class Cat extends React.Component<any, any> {
  render() {
    const mouse = this.props.mouse;
    return <img src={cat} alt='猫的图片' style={{ position: 'absolute', left: mouse.x, top: mouse.y }} width='200px' height='200px' />
  }
}
// 通过情况下我们抽离组件都是将其抽离成一个单独的组件，其独自管理内部的状态，并且一般不会和外面的组件有什么特殊的数据耦合关系；这种情况下封装的都是一个基础组件，其并没有什么交互行为要实现，仅仅是用于展示什么的。但是对于需要和外层交互的一般我们也会会抽离成一个组件，只不过需要设定好对应的入参，某些数据是由外层组件来控制的。对于这种情况完全可以把主动权掌握在自己手里，所有的数据我全都有，你想要什么我就传递给你什么，这种行为就称之为render Props
// 通常对于这种行为我们的常见做法应该是传递一个回调函数在里面，x和y还是自己维护，但是当组件内部发生变化的时候需要调用对应的回调函数来通知外层组件，并且将封装组件内部的数据传递给外层组件；现在有了 render Props之后我们就可以不再使用这种方法了，可以直接将数据和事件回调直接全部封装在自己内部，只需要传递给目标组件对应的state数据就可以了,这样的话外层组件就不需要在自己的state中保存一份数据了
// render Props只有数据和事件处理函数，UI是依赖render函数来告诉他的
class Mouse extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event: { clientX: any; clientY: any; }) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh', position: 'relative' }} onMouseMove={this.handleMouseMove}>
        <Divider>render-props</Divider>
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  render() {
    return (<div>
      <h1>移动鼠标</h1>
      <Mouse
        render={(mouse: any) => (
          <Cat mouse={mouse} />
        )}
      />
    </div>)
  }
}

export default MouseTracker