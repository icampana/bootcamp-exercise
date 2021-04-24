import React, { useState } from "react";

import Avatar from "./avatar";
import Button from "./button";

function FriendsList(Props) {
  const friends = Props.list;
  const [showFriend, setShowFriend] = useState("");

  if (friends.length === 0) {
    return <div>No friends available</div>;
  }
  const showCharacter = (name) => {
    setShowFriend(name);
  };

  const printFriend = (friend) => {
    return (
      <li key={friend.name} style={nameStyle}>
        <Avatar src={friend.image} />
        {friend.name}
        <Button
          click={() => {
            showCharacter(friend.name);
          }}
        >
          View Description
        </Button>
        <div
          style={{
            display: showFriend === friend.name ? "block" : "none"
          }}
        >
          {friend.description}
        </div>
      </li>
    );
  };

  return <ul>{friends.map(printFriend)}</ul>;
}

const nameStyle = {
  borderBottom: "1px dashed grey",
  listStyle: "none"
};

export default FriendsList;
