import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createPack } from '../.';

const ExamplePack = createPack(
  "div",
  "h1"
)

const App = () => {
  return (
    <div>
      <ExamplePack>
        Div and H1 packed!
      </ExamplePack>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
