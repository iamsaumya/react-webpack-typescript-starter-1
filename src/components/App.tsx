import * as React from "react";
import "./../assets/scss/App.scss";
import * as Empty from "./Empty";
import Test from "./Test";

const reactLogo = require("./../assets/img/react_logo.svg");

const App = () => (
  <div className="app">
    <h1>Hello World!</h1>
    <p>Foo to the barz</p>
    <img src={reactLogo.default} height="480" />
    <Empty.Main>
      <Empty.Title />
    </Empty.Main>
    <Test />
  </div>
);

export default App;
