import "./styles.css";
import Button from "./components/button";
import { useState } from "react";
import FriendsList from "./components/friends-list";

export default function App() {
  const [counter, setCounter] = useState(1);

  const addUp = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <FriendsList />

      <div>The total value is {counter}</div>

      <Button click={addUp} type="danger">
        Add Up +
      </Button>

      <Button
        click={() => {
          setCounter(counter - 1);
        }}
      >
        Remove -
      </Button>

      <Button
        click={() => {
          alert(`The current value is: ${counter}`);
        }}
        type="danger"
      >
        Show Alert
      </Button>
    </div>
  );
}
