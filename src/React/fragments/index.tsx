import React, { Fragment } from 'react'
import { Divider } from 'antd'

class Column extends React.Component<any, any> {
  render() {
    return (
      <Fragment>
        <td>Hello</td>
        <td>World</td>
      </Fragment>
    )
  }
}

class Table extends React.Component<any, any> {
  state = {
    list: [{
      name: 'tom',
      age: 32
    }, {
      name: 'Alice',
      age: 36
    }]
  }

  render() {
    const { list } = this.state
    return (
      <div>
        <Divider>fragments</Divider>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Column />
            </tr>
          </tbody>
        </table>
        {list.map(item => {
          const { age, name } = item
          return <Fragment key={age}>
            <span>{`姓名: ${name}`}</span>
            <span>{`年龄：${age}`}</span>
          </Fragment>
        })}
      </div>

    )
  }
}
export default Table