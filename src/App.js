import React from 'react';
import logo from './logo.svg';
import Hello from './Hello';
import VariableDeclaration from './variableDeclaration';
import { Button } from 'antd';
import DataType from './dataType';
import TestClass from './class';
import TestFunc from './func';
import TestGeneric from './generic';
import TestEnum from './enum';
import TypeCompability from './typeCompability';
import AdvancedType from './advancedType';
import DeclareMerge from './declareMerge';
import TestJSx from './testJsx';
import MyJsx from './my';
import DecoratorTest from './decorator';
import FCCounter from './functional';
import Type from './type';
import './App.less';
var App = function () {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"),
            React.createElement(Button, { size: 'large' }, "\u6D4B\u8BD5"),
            React.createElement(Hello, { name: 'TypeScript', enthusiasmLevel: 1 }),
            React.createElement(VariableDeclaration, null)),
        React.createElement(DataType, null),
        React.createElement(TestClass, null),
        React.createElement(TestFunc, null),
        React.createElement(TestGeneric, null),
        React.createElement(TestEnum, null),
        React.createElement(TypeCompability, null),
        React.createElement(AdvancedType, null),
        React.createElement(DeclareMerge, null),
        React.createElement(TestJSx, null),
        React.createElement(MyJsx, null),
        React.createElement(DecoratorTest, null),
        React.createElement(FCCounter, { label: '文字', count: 5 }),
        React.createElement(Type, null)));
};
export default App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBQzlCLE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQTtBQUMzQixPQUFPLG1CQUFtQixNQUFNLHVCQUF1QixDQUFBO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUE7QUFDN0IsT0FBTyxRQUFRLE1BQU0sWUFBWSxDQUFBO0FBQ2pDLE9BQU8sU0FBUyxNQUFNLFNBQVMsQ0FBQTtBQUMvQixPQUFPLFFBQVEsTUFBTSxRQUFRLENBQUE7QUFDN0IsT0FBTyxXQUFXLE1BQU0sV0FBVyxDQUFBO0FBQ25DLE9BQU8sUUFBUSxNQUFNLFFBQVEsQ0FBQTtBQUM3QixPQUFPLGVBQWUsTUFBTSxtQkFBbUIsQ0FBQTtBQUMvQyxPQUFPLFlBQVksTUFBTSxnQkFBZ0IsQ0FBQTtBQUN6QyxPQUFPLFlBQVksTUFBTSxnQkFBZ0IsQ0FBQTtBQUN6QyxPQUFPLE9BQU8sTUFBTSxXQUFXLENBQUE7QUFDL0IsT0FBTyxLQUFLLE1BQU0sTUFBTSxDQUFBO0FBQ3hCLE9BQU8sYUFBYSxNQUFNLGFBQWEsQ0FBQTtBQUN2QyxPQUFPLFNBQVMsTUFBTSxjQUFjLENBQUE7QUFDcEMsT0FBTyxJQUFJLE1BQU0sUUFBUSxDQUFBO0FBQ3pCLE9BQU8sWUFBWSxDQUFDO0FBRXBCLElBQU0sR0FBRyxHQUFhO0lBQ3BCLE9BQU8sQ0FDTCw2QkFBSyxTQUFTLEVBQUMsS0FBSztRQUNsQixnQ0FBUSxTQUFTLEVBQUMsWUFBWTtZQUM1Qiw2QkFBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQyxVQUFVLEVBQUMsR0FBRyxFQUFDLE1BQU0sR0FBRztZQUNsRDs7Z0JBQ08sZ0RBQXdCO3VDQUMzQjtZQUNKLDJCQUNFLFNBQVMsRUFBQyxVQUFVLEVBQ3BCLElBQUksRUFBQyxxQkFBcUIsRUFDMUIsTUFBTSxFQUFDLFFBQVEsRUFDZixHQUFHLEVBQUMscUJBQXFCLGtCQUd2QjtZQUNKLG9CQUFDLE1BQU0sSUFBQyxJQUFJLEVBQUMsT0FBTyxtQkFBWTtZQUNoQyxvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUUsQ0FBQyxHQUFJO1lBQy9DLG9CQUFDLG1CQUFtQixPQUFHLENBQ2hCO1FBQ1Qsb0JBQUMsUUFBUSxPQUFHO1FBQ1osb0JBQUMsU0FBUyxPQUFHO1FBQ2Isb0JBQUMsUUFBUSxPQUFHO1FBQ1osb0JBQUMsV0FBVyxPQUFHO1FBQ2Ysb0JBQUMsUUFBUSxPQUFHO1FBQ1osb0JBQUMsZUFBZSxPQUFHO1FBQ25CLG9CQUFDLFlBQVksT0FBRztRQUNoQixvQkFBQyxZQUFZLE9BQUc7UUFDaEIsb0JBQUMsT0FBTyxPQUFHO1FBQ1gsb0JBQUMsS0FBSyxPQUFHO1FBQ1Qsb0JBQUMsYUFBYSxPQUFHO1FBQ2pCLG9CQUFDLFNBQVMsSUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUk7UUFDcEMsb0JBQUMsSUFBSSxPQUFHLENBQ0osQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFBO0FBRUQsZUFBZSxHQUFHLENBQUMifQ==