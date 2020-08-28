import React, { useState, useEffect } from "react";
import "../Components Css/Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useParams } from "react-router-dom";
import db from "../firebase";
function Chat() {
  const [seed, setseed] = useState("");
  const [input, setinput] = useState("");
  const { roomId } = useParams();
  const [roomName, setroomName] = useState("");
  console.log(roomId);
  useEffect(() => {
    if (roomId) {
      db.collection("Rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setroomName(snapshot.data().name);
        });
    }
  }, [roomId]);
  console.log(roomName);
  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const Sendmessage = (e) => {
    e.preventDefault();
    console.log("you typed", input);
    setinput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__header__info">
          <h2>{roomName}</h2>
          <p>Description</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__header__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Muhammad Zulqarnain</span>chat Message
          <span className="chat__timestamp"> 3:42pm </span>
        </p>
        <p className="chat__message white">chat Message</p>
      </div>
      <div className="chat__header__footer">
        <InsertEmoticonIcon />
        <form action="">
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            type="text"
            placeholder="Type a Message"
          />
          <button type="submit" onClick={Sendmessage}>
            Send a Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
