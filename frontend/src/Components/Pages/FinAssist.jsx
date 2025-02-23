import React, { useState } from 'react';
import { Typography, Input, Button } from "@material-tailwind/react";
import axios from 'axios';
import config from '../../config/genAI';

const FinAssist = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.get('http://127.0.0.1:5000/get', {
        params: { msg: input }
      });
      const botMessage = { sender: 'bot', text: response.data };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInput('');
  };

  return (
    <div className="py-24 px-4 flex flex-col align-center justify-center bg-white">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">
          <span className="text-black">Financial </span>
          <span className="text-red-500">Assistant</span>
        </h1>
        <div className="mx-auto max-w-3xl p-8 rounded-2xl border border-gray-200 shadow-lg">
          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <Typography variant="body1">{msg.text}</Typography>
              </div>
            ))}
          </div>
          <div className="input-box mt-4">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full"
            />
            <Button onClick={handleSendMessage} className="mt-2 w-full bg-red-500 text-white hover:bg-red-600">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinAssist;
