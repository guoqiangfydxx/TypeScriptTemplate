import * as React from 'react'
import { Button, Input } from 'antd'
import './hello.less'
export interface Props {
    name: string,
    enthusiasmLevel?: number
}

interface State {
    currentEnthusiasm: number
}
class Hello extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            currentEnthusiasm: props.enthusiasmLevel || 1
        }
    }

    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

    updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({ currentEnthusiasm });
      }

    render() {
        const { name } = this.props
        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
          }
        return (
            <div className='hello'>
                <div className='greeting'>
                Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
                </div>
                <Button type='primary' onClick={this.onIncrement}>+</Button>
                <Button onClick={this.onDecrement}>-</Button>
                <Input/> 
            </div>
        )
    }
}
export default Hello

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!')
}