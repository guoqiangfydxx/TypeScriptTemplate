import React from 'react';
import logo from './logo.svg';
import Hello from './Hello'
import VariableDeclaration from './variableDeclaration'
import { Button } from 'antd'
import DataType from './dataType'
import './App.less';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
