import React, { useState, useEffect } from "react";
import { askDeepSeek } from "../api/deepseek";
import { db, auth } from "../firebase";
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [user] = useAuthState(auth);

  // Initialize Speech Recognition (Browser API)
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setInput(transcript);
    setIsListening(false);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    setIsListening(false);
  };

  recognition.onend = () => {
    if (isListening) recognition.start(); // Restart if still listening
  };

  const toggleListening = () => {
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setIsListening(!isListening);
  };

  // Text-to-Speech
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  // Fetch chat history when user logs in
  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, "chats"), where("userId", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chatHistory = snapshot.docs.map((doc) => doc.data());
      setMessages(chatHistory);
    });

    return () => unsubscribe();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || !user) return;

    setIsLoading(true);
    const userMessage = { role: "user", content: input, userId: user.uid };
    setMessages((prev) => [...prev, userMessage]);
    await addDoc(collection(db, "chats"), userMessage);

    // Get AI response
    const aiResponse = await askDeepSeek([...messages, userMessage]);
    const aiMessage = { role: "assistant", content: aiResponse, userId: user.uid };

    // Save and speak the response
    await addDoc(collection(db, "chats"), aiMessage);
    setMessages((prev) => [...prev, aiMessage]);
    speak(aiResponse); // Read AI response aloud

    setInput("");
    setIsLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      {!user ? (
        <p>Please sign in to chat.</p>
      ) : (
        <>
          <div style={{ 
            height: "400px", 
            overflowY: "auto", 
            border: "1px solid #ccc", 
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "#f9f9f9"
          }}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                style={{ 
                  textAlign: msg.role === "user" ? "right" : "left", 
                  margin: "5px",
                  padding: "8px",
                  borderRadius: "8px",
                  backgroundColor: msg.role === "user" ? "#e3f2fd" : "#f5f5f5"
                }}
              >
                <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
              </div>
            ))}
            {isLoading && <div style={{ textAlign: "left", fontStyle: "italic" }}>AI is thinking...</div>}
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type or speak your message..."
              style={{ 
                flex: 1, 
                padding: "10px", 
                borderRadius: "4px", 
                border: "1px solid #ccc" 
              }}
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={toggleListening}
              style={{
                padding: "10px",
                backgroundColor: isListening ? "#ff4444" : "#4285f4",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              {isListening ? "🛑 Stop" : "🎤 Speak"}
            </button>
            <button
              type="submit"
              disabled={isLoading}
              style={{
                padding: "10px",
                backgroundColor: "#34a853",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              {isLoading ? "..." : "Send"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Chat;