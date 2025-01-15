import React, { useState } from "react";
import "../Style/chatBox.scss";
import { getCookie } from "../Helpers/cookie";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const token = getCookie("token");
  const toggleChatBox = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-toggle" onClick={toggleChatBox}>
        <i className="fa-solid fa-headset"></i>
      </div>

      {token && isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h4>Hỗ trợ khách hàng</h4>
            <button onClick={toggleChatBox}>✖</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === "user" ? "user" : "admin"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập tin nhắn..."
            />
            <button onClick={handleSend}>Gửi</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
