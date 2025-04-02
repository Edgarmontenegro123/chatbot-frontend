import { useState } from 'react'
import {sendMessage} from "./services/chatService.ts";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSendMessage = async () => {
      if (message.trim() === "") return;
      const reply = await sendMessage(message);
      setResponse(reply);
  }

  return (
    <div style = {{ padding: "20px", maxWidth: "400px", margin: "auto"}}>
        <h1>Chatbot</h1>
        <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            style={{ width: "100%" , padding: "8px", marginBottom: "10px" }}
            />
        <button onClick={handleSendMessage} style={{width: "100%", padding: "8px"}}>Enviar</button>
        {response && <p>Respuesta del chatbot: {response}</p>}
    </div>
  );
}

export default App
