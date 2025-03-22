import React, { useState, useEffect } from "react";
import axios from "axios";
import "./chatbot.css"; // Import the CSS file

function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSendMessage = async () => {
    setIsLoading(true);
    setError(null);
    const userData = {
      input : userInput
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/trip/search",
        userData
      );

      var botResponse = "";
      if (response.status != 404 || response.status != 500) {
        botResponse = response.data.itinerary;
      }
      else {
        throw new Error("Backend response failed");
      }


      // const botResponse = response.data.response;
      setChatHistory([...chatHistory, { type: "user", message: userInput }]);
      setChatHistory([...chatHistory, { type: "bot", message: botResponse }]);
      setUserInput("");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="input-field"
        />
        <button
          type="button"
          onClick={handleSendMessage}
          disabled={isLoading}
          className="send-button"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Chatbot;
