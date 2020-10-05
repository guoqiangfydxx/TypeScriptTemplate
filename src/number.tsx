import React, { Component } from 'react'
class TestNumber extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render() {
        // 1. 要将二进制，八进制，十六进制转换成十进制的数值，可以使用Number()
        console.log(Number('0b111'))
        console.log(Number('0o634'))
        console.log(Number('0x312'))
        // 2. Number.isNaN用于检测某一个数值是否是NaN，Number.isFinite用来检测某一个数值是否为有限的，他们相对于传统的NaN和isFinite函数的区别是这两个函数只针对数值有效，而传统的isNaN和isFinite会对传入的参数默认进行转换，再进行判断
        console.log(Number.isNaN(NaN))
        console.log(isNaN(5343))
        console.log(Number.isFinite(4343))
        // 3. Number.parseInt, Number.parseFloat和传统的parseInt，parseFloat并没有什么区别，这样做只是为了逐步减少全局性方法，使得语言逐步模块化
        // parseInt和parseFloat会从字符串的第一个位置开始解析第一个为空位置的字符，如果可以转换成数字，那么就可以继续解析下一个字符，如果第一个字符就不能转换成数字的话那么就会返回NaN
        // 4. Number.isInteger(),用来判断一个数值是否为整数，但是对于过大或者多小的数值来说其判断都是不太准确的，所以对于过大或者多小的数值来说不建议使用该方法
        // 5. JS对象可以表示的整数数值范围为：-2^53到2^53,一旦要是超过了这个范围的话，那么就无法准确的表示这个值了，所以就提供了Number.isSafeInteger()方法来校验某一个数值是否在这个范围之中
        // 6. Math对象的扩展，ES6在Math对象上扩展了好几个静态方法：
            // Math.trunc，会返回一个数的整数部分，截取掉小数部分，对于非数值的参数默认会进行转换，对于无法转换的会返回NaN
            // Math.sign(),会判断参数是正数，负数，还是0，对于非数值的参数也会默认进行转换，同样无法转换的也是返回NaN
            // Math.cbrt(),计算一个数的立方根
            // Math.hypot,用于计算所有参数的平方和的立方根，可以用于计算勾股定理
        // 7. **,指数运算符， 2 ** 2 = 4, 3 ** 3 = 27,这一运算的特点是右结合，也就是从最右边开始计算的
        // 8. BigInt数据类型
        return (
            <div>
                number-数值
            </div>
        )
    }
}
export default TestNumber