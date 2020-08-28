import React, { useEffect, useState } from "react";
import "../Components Css/SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "../firebase";
import { Link } from "react-router-dom";

function SidebarChat({ key, id, name, addNewChat }) {
  const [seed, setseed] = useState("");
  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000));
  }, []);

  const CreateChat = () => {
    const roomName = prompt("please enter a room name for chat");
    if (roomName) {
      db.collection("Rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarchat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarchat__info">
          <h2>{name}</h2>
          <p>Last room Message</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={CreateChat} className="sidebarchat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
