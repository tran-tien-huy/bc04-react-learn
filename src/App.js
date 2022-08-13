import logo from "./logo.svg";
import "./App.css";
// import Ex_Layout from "./Ex_Layout/Ex_Layout";
// import DataBinding from "./DataBinding/DataBinding";
// import EventBinding from "./EventBinding/EventBinding";
// import ConditionalRendering from "./ConditionalRendering/ConditionalRendering";
// import DemoState from "./DemoState/DemoState";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
// import DemoProps from "./DemoProps/DemoProps";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Ex_Layout></Ex_Layout> */}
        <RenderWithMap />
        {/* <DemoProps /> */}
      </header>
    </div>
  );
}

export default App;
