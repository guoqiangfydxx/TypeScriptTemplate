import React from 'react'
import { isFish, isString, isNumber, getRandomPadding, Padder, SpaceRepeatingPadder, StringPadder} from './util'
function add (x: number, y?:number) {
    return x + (y || 0)
}

class C {
    a: number;
    b?: number;
    constructor(a:number) {
        this.a = a
    }
}

function fixed(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + ' .the ' + epithet
    }
    name = name || 'Bob'
    return postfix('great')
}

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIComponet {
    animate(x: number, y: number, easing: Easing) {
        if (easing === 'ease-in') {

        } else if (easing === 'ease-out') {

        } else if (easing === 'ease-in-out') {

        }
    }

    constructor() {

    }
}

function fluck<T, K extends keyof T>(o: T,names: K[]): T[K][] {
    return names.map(n => o[n])
}

interface Person {
    name: string,
    age: number
}

let person: Person = {
    name: 'tom',
    age: 64
}

const strings: string[] = fluck(person, ['name'])

type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}

type Partial<T> = {
    [P in keyof T]?: T[P]
}

type personReadonly = Readonly<Person>
type personPartial = Partial<Person>

class AdvancedType extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    padLeft = (value: string, padding: string | number):string => {
        if (typeof padding === 'number') {
            return Array(padding + 1).join(' ') + value
        } else if (typeof padding === 'string') {
            return padding + value
        }  else {
            throw new Error(`Expected string or number, got '${padding}'.`);
        }
    }

    render() {
        console.log('联合类型')
        console.log(this.padLeft('hello word', 'ufusu'))

        console.log('类型保护机制，类型保护就是一些表达式，它们会在运行时检查以确保在某个作用于里面的类型，其返回是一个类型谓词，谓词就是ParamName is Type这种形式')

        console.log('typeof 类型保护')
        console.log(isNumber('94994'), isNumber(6))
        console.log(isString('fjfjfnejr'), isString(true))

        console.log('instanceof 类型保护')
        let padder1: Padder = getRandomPadding()
        if (padder1 instanceof SpaceRepeatingPadder) {
            console.log('padder1 是SpaceRepeatingPadder的实例')
        }
        if (padder1 instanceof StringPadder) {
            console.log('padder 是 StringPadder 的实例')
        }

        console.log('null类型, 开启了严格模式，null和undefined不能随意的赋值给其他类型')
        let s: string | null = 'foo'
        s = null
        console.log('s>>>>, 这里使用联合类型', s)
        // s = undefined
        console.log('s不接受undefined')

        console.log('开启了严格模式后，可选参数默认就加上了 | undefined')
        console.log(add(1, 2))
        console.log(add(3))
        console.log(add(5, undefined))
        // console.log(add(10, null))
        console.log('null不能赋值给number或者是undefined')

        console.log('可选属性也是这样的')
        const c = new C(94838)
        c.a = 32
        // c.b = null
        console.log('这里的b属性是联合类型： number | undefined')

        console.log('由于开启了严格模式之后，我们要使用null一般是使用联合类型来做的，但是这样的话在实际的代码中需要使用类型保护去除null，一般我们使用短路运算符，因为null在判断中一直是false。')
        console.log('如果上面的方法不起作用，那么就是用类型断言去除，就是添加!后缀')
        console.log(fixed('sjsmfjsm'))
        console.log(fixed(null))

        console.log('字符串字面量类型')
        const ui = new UIComponet()
        ui.animate(34, 67, 'ease-in')

        console.log('索引类型')
        console.log('索引类型查询操作符', 'keyof T', 'keyof T的结果为T上已知的公共属性名的联合')
        console.log('string>>>>>', strings)
        console.log('索引访问操作符， T[K],只要满足K extends keyof T')

        console.log('映射类型，按照某种规则将就旧的属性全都转换成新的属性')
        const person1: personReadonly = {
            name: 'toeoe',
            age: 54
        }
        console.log('person-readonly>>>', person1)
        const person2: personPartial = {
            age: 45
        }
        console.log('person-partial>>>>', person2)
        return (
            <div>高级类型</div>
        )
    }
}
export default AdvancedType