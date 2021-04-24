import React from "react";

function FriendsList() {
  const friends = ["David", "Esteban", "Valentina"];
  const printFriend = (name) => {
    return <li style={nameStyle}>{name}</li>;
  };

  return <ul>{friends.map(printFriend)}</ul>;
}

const nameStyle = {
  borderBottom: "1px dashed grey",
  listStyle: "none"
};

export default FriendsList;
