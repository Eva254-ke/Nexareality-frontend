// src/components/tutor/AITutorPortal.js
import React, { useState } from 'react';

export default function AITutorPortal() {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your STEM tutor. Ask me anything about the labs.", isAI: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, 
      { text: input, isAI: false },
      { text: "I'm a simulated response to: " + input, isAI: true }
    ]);
    setInput('');
  };

  return (
    <div className="tutor-portal">
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.isAI ? 'ai' : 'user'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}