import React from "react";
import { Divider } from "antd";
// import { Route } from "react-router-dom";
import Link from "./mockRouter/Link";
import Route from "./mockRouter/Route";
import Switch from "./mockRouter/Switch";
import BrowserRouter from "./mockRouter/BrowserRouter";
// function HomePage() {
//   return <div>home-page</div>;
// }

class HomePage extends React.Component {
  state = {};

  render() {
    return <div>home-page</div>;
  }
}

function UserPage() {
  return <div>user-page</div>;
}

function ChildrenPage() {
  return <div>children-page</div>;
}

function RenderPage() {
  return <div>render-page</div>;
}

function DetailPage() {
  return <div>detail-pages</div>;
}

function SearchPage(props: any) {
  const { id } = props.match.params;
  return (
    <div>
      search-page---{id}
      <Link to={`/search/${id}/detail`}>详情界面</Link>
    </div>
  );
}

function LoginPage() {
  return <div>login-page</div>;
}
class TestRouter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Divider>react-router</Divider>
        <BrowserRouter>
          <Link to="/">首页</Link>
          <br />
          <Link to="/user">用户中心</Link>
          <br />
          <Link to="/login">登录</Link>
          <br />
          <Link to="/children">children</Link>
          <br />
          <Link to="/render">render</Link>
          <br />
          <Link to="/search/123">搜索-动态路路由</Link>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/user" exact component={UserPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/children" exact component={ChildrenPage} />
            <Route path="/render" exact component={RenderPage} />
            {/* <Route path="/search/:id" exact component={SearchPage} />
            <Route component={DetailPage} path={`/search/:id/detail`} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default TestRouter;
