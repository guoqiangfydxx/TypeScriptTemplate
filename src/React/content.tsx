import React from "react";
import { Divider, Button } from "antd";
import "./react.less";
const ThemeContext = React.createContext({ color: "red" });
const UserContext = React.createContext({ name: "tom" });
class ThemeButton extends React.Component<any, any> {
  static contextType = ThemeContext;
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div className={this.context.color}>文本信息</div>;
  }
}

function FunThemeButton() {
  return (
    <ThemeContext.Consumer>
      {(ctx) => {
        console.log("ctx: ", ctx);
        return (
          <div className={ctx.color}>
            函数组件接收context
            {
              <UserContext.Consumer>
                {(user) => <div>{`用户人姓名： ${user.name}`}</div>}
              </UserContext.Consumer>
            }
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

class TestContext extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      theme: {
        color: "red",
      },
      user: {
        name: "jone",
      },
    };
  }

  changeTheme = () => {
    const {
      theme: { color },
    } = this.state;
    this.setState({
      theme: { color: color === "red" ? "orange" : "red" },
    });
  };

  render() {
    const { theme, user } = this.state;
    return (
      <div>
        <Divider>context</Divider>
        <ThemeContext.Provider value={theme}>
          <div>
            <UserContext.Provider value={user}>
              <ThemeButton />
              <FunThemeButton></FunThemeButton>
            </UserContext.Provider>
          </div>
        </ThemeContext.Provider>
        <Button onClick={this.changeTheme}>改变主题</Button>
      </div>
    );
  }
}
export default TestContext;
