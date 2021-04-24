import "./styles.css";
import Button from "./components/button";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(1);

  const myClick = (event) => {
    event.preventDefault();
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div>
        <span>{counter}</span>
      </div>

      <Button click={myClick}>Click Me!</Button>
    </div>
  );
}
