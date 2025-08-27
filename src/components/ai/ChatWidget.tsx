"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send } from "lucide-react";

type Props = {
  listingId?: string;
};

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget({ listingId }: Props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, loading]);

  const send = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          listingId,
        }),
      });

      const data = await res.json();

      const botMessage: ChatMessage = {
        role: "assistant",
        content: data.content || "Sorry, I didn't understand that.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Error reaching assistant." },
      ]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed right-4 bottom-4 px-5 py-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-[#111827] transition flex items-center gap-2 z-50 cursor-pointer"
        whileTap={{ scale: 0.95 }}
      >
        <Bot className="w-5 h-5" />
        {open ? "Close" : "Chat with us"}
      </motion.button>

      {/* Chatbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
            className="fixed right-4 bottom-20 w-80 max-h-[500px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-blue-500 text-white">
              <Bot className="w-5 h-5" />
              <span className="font-semibold text-sm">AI Assistant</span>
            </div>

            {/* Messages */}
            <div className="flex-1 px-3 py-2 overflow-y-auto flex flex-col gap-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`px-4 py-2 rounded-2xl text-sm shadow-sm max-w-[80%] ${
                    m.role === "user"
                      ? "self-end bg-blue-500 text-white"
                      : "self-start bg-gray-100 text-gray-800"
                  }`}
                >
                  {m.content}
                </motion.div>
              ))}

              {/* Typing animation */}
              {loading && (
                <div className="self-start bg-gray-100 text-gray-600 px-4 py-2 rounded-2xl text-sm flex gap-1">
                  <motion.span
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                  />
                  <motion.span
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                  />
                  <motion.span
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                  />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex gap-2 px-3 py-3 border-t border-gray-100">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={send}
                disabled={loading}
                className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-500 disabled:opacity-50 flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
