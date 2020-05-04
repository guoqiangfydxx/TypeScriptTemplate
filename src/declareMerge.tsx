import React from 'react'
import { Color } from './merge'

interface Box {
    width: number,
    height: number
}

interface Box {
    scale: number
}
/// <reference path="merge.ts" />
const box: Box = { width: 44, height: 93, scale: 9}
class DeclareMerge extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log('merge>>>>>>>>', Color.mixColor('yellow'))
        console.log('Color>>>>>', Color, typeof Color, Color.toString())
        return (
            <div>声明合并</div>
        )
    }
}
export default DeclareMerge