import React from "./React/react/mockReact/kreact";
import ReactDOM from "./React/react/mockReact/kReactDom";
import Component from "./React/react/mockReact/Component";
import "./index.css";
// import App from "./React/react/index.tsx";
// import App from "./App";
// // import { Provider } from 'react-redux'
// import { Provider } from "./React/redux/mockReactRedux";
// import store from "./store";
// import * as serviceWorker from "./serviceWorker";
// import ErrorBoundary from "./ErrorBoundary";
// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <ErrorBoundary>
//         <App />
//       </ErrorBoundary>
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById("root")
// );
function FunctionComponent({ name }) {
  return <div>this is a function component --- {name}</div>;
}

class ClassComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("this.props>>>>>>>", this.props);
    const { name } = this.props;
    return (
      <div>
        这是一个class组件---{name}
        <button onClick={() => console.log("dfsdgdsf")}>click me</button>
      </div>
    );
  }
}

const App = (
  <div className="myDiv">
    <p>这是一个文本</p>
    <a href="https://googl.com">这是一个链接</a>
    <div className="table">
      <h1>标题</h1>
    </div>
    <FunctionComponent name="tom" />
    <ClassComponent name={"jane"} />
    <>
      <h1>好</h1>
      <h2>h2标题</h2>
    </>
    {[3, 7, 8].map((item) => (
      <div key={item}>{item}</div>
    ))}
  </div>
);
ReactDOM.render(App, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLGFBQWEsQ0FBQztBQUNyQixPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUM7QUFDeEIsT0FBTyxLQUFLLGFBQWEsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxRQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFDLEdBQUcsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUUxRCx1RUFBdUU7QUFDdkUsd0VBQXdFO0FBQ3hFLDJEQUEyRDtBQUMzRCxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMifQ==
