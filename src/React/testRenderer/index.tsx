import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Divider } from 'antd'

function Link(props: { page: string | undefined; children: React.ReactNode }) {
return <a href={props.page}>{props.children}</a>
}

const testRenderer = TestRenderer.create(<Link page='http://www.baidu.com'>facebook</Link>)

class TestReactRenderer extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('快照功能')
    console.log(testRenderer.toJSON())
    return <div>
      <Divider>test-renderer</Divider>
    </div>
  }
}