import React from 'react'
import { Button, Divider } from 'antd'
// import { connect } from 'react-redux'
import { connect } from '../redux/mockReactRedux'
class TestReactRedux extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  add = () => {
    this.props.dispatch({
      type: 'ADD'
    })
  }

  minus = () => {
    this.props.dispatch({
      type: 'MINUS'
    })
  }

  addAge = () => {
    this.props.dispatch({
      type: 'ADDAGE',
      age: 3
    })
  }

  render() {
    const { counter, person } = this.props
    console.log('this.props', this.props)
    return <div>
      <Divider>react-redux</Divider>
      <Button onClick={this.add}>add</Button>
      <Button onClick={this.minus}>minus</Button>
      <p>counter: {counter}</p>
      <Button onClick={this.addAge}>add age</Button>
      <p>person: {person?.age}</p>
    </div>
  }
}
const mapStateToProps = (state: { counter: number; person: { age: number } }) => {
  const { counter, person } = state
  console.log('state>>>>>>>>', state)
  return {
    counter,
    person
  }
}
export default connect(mapStateToProps, undefined)(TestReactRedux)