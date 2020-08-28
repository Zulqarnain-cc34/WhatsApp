import React from "react";
import "../Components Css/Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SideBarChat from "./SidebarChat";
function Sidebar() {
  //  const [state, setstate] = useState("");
  return (
    <div className="sidebar">
      <div className="sidebar__header grey">
        <Avatar src="" alt="" />
        <div className="sidebar__header___right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon className="search" />
          <input placeholder="Search or Start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chat">
        <SideBarChat addNewChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  );
}

export default Sidebar;
