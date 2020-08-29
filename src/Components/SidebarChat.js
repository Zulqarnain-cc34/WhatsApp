import React, { useEffect, useState } from "react";
import "../Components Css/SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "../firebase";
import { Link } from "react-router-dom";

function SidebarChat({ key, id, name, addNewChat }) {
  const [seed, setseed] = useState("");
  const [message, setmessage] = useState("");
  useEffect(() => {
    if (id) {
      db.collection("Rooms")
        .doc(id)
        .collection("message")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setmessage(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [id]);
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
          <p>{`${message[0]?.message}`}</p>
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
