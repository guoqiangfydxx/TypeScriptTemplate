import React from 'react'
class Child extends React.Component<any, any> {
  state = {}

  render() {
    return <div>
      this is child component
    </div>
  }
}

class Parent extends React.Component<any, any> {
  state = {}

  render() {
    const arr = React.Children.toArray(this.props.children)
    console.log('aratsfdfsd', arr)
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          console.log('child>>>>', child)
          return <div className='container'>{child}</div>
        })}
        <div>children的个数为：{React.Children.count(this.props.children)}</div>
        {/* <div>children是否只有一个子节点: {React.Children.only(this.props.children)}</div> */}
        <h1>直接渲染一个数组</h1>
        <div className='array-container'>
          {React.Children.toArray(this.props.children)}
        </div>
      </div>
    )
  }
}

class TestChildren extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Parent>
        <Child />
        <Child />
        <h1>描述列表</h1>
        <div>当晚，广州市花都区疫情防控指挥部立即启动应急响应，开展流行病学调查，目前对其密切接触人员68人已经全部实行隔离医学观察，其中66人核酸检测为阴性，2人检测结果待出。目前还在对王某某曾经活动场所进行全面排查，有关信息将及时向社会公布。</div>
      </Parent>
    )
  }
}
export default TestChildren