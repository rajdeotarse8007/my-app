"use client";

import { useState } from "react";
import { askGemini } from "./actions";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleSubmit = async () => {
    setLoading(true);

    const answer = await askGemini(input, history);

    setResponse(answer);

    setHistory((prev) =>
      prev.concat({ question: input, answer: answer })
    );

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>🤖 AI Chat</h2>

        <div style={styles.inputRow}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask AI..."
            style={styles.input}
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              ...styles.button,
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </div>

        {response && (
          <div style={styles.responseBox}>
            <b>AI:</b> {response}
          </div>
        )}

        <div style={styles.history}>
          {history.map((item, i) => (
            <div key={i} style={styles.chatItem}>
              <p><b>You:</b> {item.question}</p>
              <p><b>AI:</b> {item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "600px",
    background: "#fff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  inputRow: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    background: "#667eea",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
  },
  responseBox: {
    marginTop: "15px",
    padding: "12px",
    background: "#f1f5ff",
    borderRadius: "8px",
  },
  history: {
    marginTop: "20px",
    maxHeight: "250px",
    overflowY: "auto",
  },
  chatItem: {
    padding: "10px",
    marginBottom: "10px",
    background: "#f9f9f9",
    borderRadius: "8px",
    border: "1px solid #eee",
  },
};
