import React from 'react';
import logo from './logo.svg';
import Hello from './Hello'
import VariableDeclaration from './variableDeclaration'
import { Button } from 'antd'
import DataType from './dataType'
import TestClass from './class'
import TestFunc from './func'
import TestGeneric from './generic'
import TestEnum from './enum'
import TypeCompability from './typeCompability'
import AdvancedType from './advancedType'
import DeclareMerge from './declareMerge'
import TestJSx from './testJsx'
import MyJsx from './my'
import DecoratorTest from './decorator'
import FCCounter from './functional'
import Type from './type'
import LetTest from './let'
import StrTest from './str'
import NumberTest from './number'
import FunctionTest from './function'
import StateTest from './React/state'
import HOCTest from './React/hoc'
import PortalTest from './React/portal'
import ContextTest from './React/content'
import ReduxTest from './React/redux'
import './App.less';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.0090
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button size='large'>测试</Button>
        <Hello name='TypeScript' enthusiasmLevel={1} />
        <VariableDeclaration />
      </header>
      <DataType />
      <TestClass />
      <TestFunc />
      <TestGeneric />
      <TestEnum />
      <TypeCompability />
      <AdvancedType />
      <DeclareMerge />
      <TestJSx />
      <MyJsx />
      <DecoratorTest />
      <FCCounter label={'文字'} count={5} />
      <Type />
      <LetTest />
      <StrTest />
      <NumberTest />
      <FunctionTest />
      <StateTest /> 
      <HOCTest />
      <PortalTest />
      <ContextTest />
      <ReduxTest />
    </div>
  );
}

export default App;