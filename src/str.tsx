import React from 'react'
import { configConsumerProps } from 'antd/lib/config-provider'

function tag(arr: any, arg1: any, arg2: any) {
    console.log('arr>>>>>', arr)
    console.log('arg1>>>>>>', arg1)
    console.log('arg2>>>>>>', arg2)
}

// 标签模板
function passthru(literals: any, ...values: any[]) {
    console.log('passthru>>>>', literals, values)
    let output = "";
    let index;
    for (index = 0; index < values.length; index++) {
      output += literals[index] + values[index];
    }
  
    output += literals[index]
    return output;
  }
class StrTest extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render() {
        // ES6针对字符串的Unicode码点做了改进，只要将码点放入到大括号中就可以正确的读取该字段，无论是其是否是大于FFFF
        console.log('str>>>>>>>', "\u{20BB7}")
        // ES6为字符串增加了遍历器接口,这一遍历器的最大优点就是可以识别大于0xFFFF的码点
        for (const char of 'tomLKitty') {
            console.log('char>>>>', char)
        }

        let text = String.fromCodePoint(0x20BB7);

        for (let i = 0; i < text.length; i++) {
        console.log('normal>>>', text[i]);
        }

        for (const i of text) {
            console.log('i>>>', i)
        }

        console.log('中》>>>>', '中' === '\u4e2d')

        console.log("json>>>>>", JSON.stringify('\u{D834}'))
        const a =  1
        const b = 4
        console.log('标签模板', tag`Hello ${ a + b } world ${ a * b }`)

        const total = 30
        let msg = passthru`The total is ${total} (${total*1.05} with tax)`
        console.log('msg>>>>>>>', msg)

        console.log('fromCharCode', String.fromCharCode(0x7231))
        console.log('fromCharCode1', String.fromCharCode(0x20BB7))
        // fromCharCode无法识别大于0xFFFF的码点，所以如果遇到了大于0xFFFF的码点就会出现问题
        console.log('fromCodePoint', String.fromCodePoint(0x20BB7))
        console.log('fromCodePoint', String.fromCodePoint(0x78, 0x1f680, 0x79))
        // fromCodePoint是直接定义在String这个对象上的，并不是字符串的实例方法
        return <div>字符串扩展</div>
    }
}
export default StrTest