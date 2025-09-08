"use client";

import React from "react";
import { useState } from "react";
import { Bot, Send } from "lucide-react";
import { Client } from "@gradio/client";
import ReactMarkdown from "react-markdown";

const Page = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage;
    setInputMessage("");
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const client = await Client.connect("vapit/virtual-me", {
        hf_token: process.env.NEXT_PUBLIC_HF_TOKEN,
      });

      const result = await client.predict("/chat", {
        message: userMessage,
      });

      // ✅ Ensure response is a string
      const reply = Array.isArray(result.data)
        ? result.data[0]
        : String(result.data);

      setMessages((prev) => [...prev, { type: "bot", content: reply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          type: "system",
          content: "Sorry, there was an error processing your message.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-container">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="glassmorphism content-center p-6 mb-8 rounded-lg">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="head-text blue-gradient_text">Virtual Me!</h1>
              <p className="pt-6 text-slate-700 font-poppins ">
                Talk with Virtual me to learn more about me!
              </p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-[400px] overflow-y-auto flex flex-col space-y-6 mb-12 py-6">
          {messages.length === 0 ? (
            <div className="flex justify-center items-center h-full ">
              <div className="info-box neo-brutalism-blue text-center">
                <Bot className="w-16 h-16 mx-auto mb-4 text-white" />

                <p className="text-white/80">
                  Start a conversation by typing a message below. I&apos;m here
                  to help!
                </p>
              </div>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-4  ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {/* {message.type === "bot" && (
                  <div className="logo p-2 flex items-center justify-center flex-shrink-0"></div>
                )} */}
                <div
                  className={`max-w-md px-6 py-4 rounded-lg ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-[#28e744] to-[#24b50b] text-white shadow-lg"
                      : "neo-brutalism bg-gradient-to-r from-[#474ee4] to-[#a44ffe] text-white"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {message.type === "user" ? (
                      message.content
                    ) : (
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    )}
                  </p>
                </div>
                {/* {message.type === "user" && (
                  <div className="logo p-2 flex items-center justify-center flex-shrink-0"></div>
                )} */}
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex gap-4 justify-start">
              <div className="neo-brutalism-white px-6 py-4 rounded-lg">
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#000000] to-[#393c41] rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    Thinking...
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="glassmorphism p-6 rounded-lg">
          <div className="flex gap-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) =>
                e.key === "Enter" && !isLoading && handleSendMessage()
              }
              placeholder="Type your message here..."
              className="input flex-1"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="btn disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all duration-250 hover:shadow-lg"
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
