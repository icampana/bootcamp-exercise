import "./styles.css";
import Button from "./components/button";
import { useState, useEffect } from "react";
import FriendsList from "./components/friends-list";
import axios from "axios";

const getData = () => {
  const URL = "https://www.breakingbadapi.com/api/characters";

  const response = axios.get(URL);

  return response;
};

export default function App() {
  const [counter, setCounter] = useState(1);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(1);

  useEffect(() => {
    const MyData = getData();
    MyData.then((response) => {
      if (response.statusText === "OK") {
        const friendsNames = response.data.map((character) => {
          return {
            name: character.name,
            image: character.img,
            description: character.occupation
          };
        });
        console.debug("Information loaded " + reload);
        setLoading(false);
        setFriends(friendsNames);
      }
    });
  }, [reload]);

  const addUp = () => {
    setCounter(counter + 1);
  };

  if (loading) {
    return <div>Wait until data is downloaded</div>;
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <FriendsList list={friends} />

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
          setReload(reload + 1);
        }}
        type="danger"
      >
        Reload
      </Button>
    </div>
  );
}
