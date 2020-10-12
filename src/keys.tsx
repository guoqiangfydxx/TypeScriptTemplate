import React from "react";
import { Button, Input } from "antd";
class TestKeys extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: [
        {
          name: "tom",
          age: "26",
          id: 26,
        },
        {
          name: "jone",
          age: 15,
          id: 31,
        },
      ],
    };
  }

  add = () => {
    // 这里就展示出使用index作为key的危害了，React是根据key是否改变来确定是否要更新dom，但是如果使用了index之后
    // 此时改变了list，就以第一个元素来说，其key值没有改变都是0，但是实际上其对应的真实元素已经发生了改变，所以当出现以下三种情况的时候就可以使用index作为key
    // 1. list和items都是静态的，不需要重新计算和改变
    // 2. list本身就没有唯一的id
    // 3. list不再被排序和过滤
    // 就可以安全的使用index作为key
    this.setState({
      list: [
        {
          name: Math.random().toString(36).substring(5),
          age: Math.floor(Math.random() * 100),
          id: Math.floor(Math.random() * 1000),
        },
        ...this.state.list,
      ],
    });
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        {list.map(
          (item: { name: string; age: number; id: number }, index: number) => {
            const { name, age, id } = item;
            return (
              <div key={index}>
                <p>
                  {`id: ${id}, 姓名: ${name}`}, {`年龄: ${age}`}
                  <Input />
                </p>
              </div>
            );
          }
        )}
        <Button onClick={this.add}>添加</Button>
        {list.map(
          (item: { name: string; age: number; id: number }, index: number) => {
            const { name, age, id } = item;
            return (
              <div key={id}>
                <p>
                  {`id: ${id}, 姓名: ${name}`}, {`年龄: ${age}`}
                  <Input />
                </p>
              </div>
            );
          }
        )}
      </div>
    );
  }
}
export default TestKeys;
