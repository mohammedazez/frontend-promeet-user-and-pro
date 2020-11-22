import React, { useState } from "react";
import "../css/ChatPro.css";

const ENDPOINT = "https://project-chat-application.herokuapp.com/";

let socket;

function ChatPro({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <h1>Membuat sistem chat untuk pro</h1>
    </div>
  );
}

export default ChatPro;
