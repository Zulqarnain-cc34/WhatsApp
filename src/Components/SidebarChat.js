import React, { useEffect, useState } from "react";
import "../Components Css/SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat({ addNewChat }) {
  const [seed, setseed] = useState("");

  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000));
  }, []);

  const CreateChat = () => {
    const roomName = prompt("please enter a room name for chat");
    if (roomName) {
      //dosomething
    }
  };
  return !addNewChat ? (
    <div className="sidebarchat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarchat__info">
        <h2>Room Name</h2>
        <p>Last room Message</p>
      </div>
    </div>
  ) : (
    <div onClick={CreateChat} className="sidebarchat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
