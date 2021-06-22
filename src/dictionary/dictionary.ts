import { Key, ReactNode } from 'react'
interface SelectOptionProps<V = Key, D = string> {
    value: V,
    name: D
}
interface AnyObject<T = any> {
    [K: string]: T
}
class Dictionary<D = any> {
    private list: SelectOptionProps<Key, D>[] = []
    private defaultValue: ReactNode = ''
    private enums: AnyObject = {}

    public getDicList = () => this.list
    public getEnums = () => this.enums

    constructor(dataSource: SelectOptionProps<Key, D>[] = [], defaultValue: ReactNode = '') {
        let list  = dataSource
        if (!Array.isArray(list)) {
            list = []
        }

        this.list = list
        this.defaultValue = defaultValue

        for (const item of list) {
            const { value, name } = item
            this.enums[value] = name
        }
    }
}
export default Dictionary