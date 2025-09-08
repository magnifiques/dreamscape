// // components/Chatbot.js
// "use client"; // Required for client-side components in Next.js App Router

// import { useState, useEffect } from "react";
// import { Client } from "@gradio/client";

// export default function Chatbot() {
//   const [app, setApp] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Replace with your Space identifier
//   const SPACE_ID = "vapit/virtual-me";

//   // Connect to the Gradio Space on mount
//   useEffect(() => {
//     async function connectToSpace() {
//       try {
//         // For public Spaces; add { hf_token: process.env.HF_TOKEN } for private Spaces
//         const clientApp = await Client.connect(SPACE_ID, {
//           hf_token: process.env.HF_TOKEN,
//         });
//         setApp(clientApp);
//         console.log("Connected to Gradio Space");
//       } catch (err) {
//         setError("Failed to connect to the chatbot. Please try again later.");
//       }
//     }
//     connectToSpace();
//   }, []);

//   // Handle sending a message
//   const handleSendMessage = async () => {
//     if (!app || !inputText.trim()) return;

//     const newMessage = { role: "user", content: inputText };
//     setMessages((prev) => [...prev, newMessage]);
//     setInputText("");
//     setLoading(true);
//     setError("");

//     try {
//       const history = messages.map((msg) => [
//         msg.role === "user" ? msg.content : null,
//         msg.role === "system" ? msg.content : null,
//       ]);
//       const result = await app.predict("/chat", [inputText, history]);

//       const botResponse =
//         result.data[0] || result.data.response || "No response";
//       setMessages((prev) => [
//         ...prev,
//         { role: "system", content: botResponse },
//       ]);
//     } catch (err) {
//       setError("Failed to get response: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-container">
//       <h2 className="head-text blue-gradient_text">Chatbot</h2>
//       <div
//         className="glassmorphism mt-4 p-4 h-[500px] overflow-y-auto rounded-lg"
//         style={{ background: "rgba(8, 116, 239, 0.07)" }}
//       >
//         {messages.length === 0 && (
//           <p className="text-gray-500 text-center mt-10">
//             Start talking with Virtual Me!
//           </p>
//         )}
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`my-2 p-3 rounded-lg max-w-[80%] ${
//               msg.role === "user"
//                 ? "ml-auto bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white"
//                 : "mr-auto neo-brutalism-blue text-white"
//             }`}
//           >
//             {msg.content}
//           </div>
//         ))}
//       </div>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       <div className="flex gap-4 mt-4">
//         <input
//           type="text"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//           placeholder="Type your message..."
//           className="input"
//           disabled={loading}
//         />
//         <button
//           onClick={handleSendMessage}
//           disabled={loading || !app}
//           className="btn"
//         >
//           {loading ? "Sending..." : "Send"}
//         </button>
//       </div>
//     </div>
//   );
// }
