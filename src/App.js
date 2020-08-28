import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar.js";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
