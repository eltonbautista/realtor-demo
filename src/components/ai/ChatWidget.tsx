"use client";
import { useState, useRef, useEffect } from "react";

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
          listingId 
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
        { role: "assistant", content: "Error reaching assistant." },
      ]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed right-4 bottom-4 px-4 py-3 rounded-full border border-gray-300 bg-white shadow-lg hover:shadow-xl transition cursor-pointer z-50 text-sm font-medium"
      >
        {open ? "Close chat" : "Questions? Chat with us"}
      </button>

      {open && (
        <div className="fixed right-4 bottom-20 w-80 max-h-[420px] bg-white border border-gray-200 rounded-xl shadow-xl flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="px-3 py-2 font-semibold border-b border-gray-100">
            Ask about this listing
          </div>

          {/* Messages */}
          <div className="flex-1 px-3 py-2 overflow-y-auto flex flex-col gap-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg max-w-[85%] text-sm ${
                  m.role === "user"
                    ? "self-end bg-blue-50"
                    : "self-start bg-gray-100"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && <div className="opacity-60 text-sm">Thinking…</div>}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2 px-3 py-2 border-t border-gray-100">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="e.g., Is there an open house?"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={send}
              disabled={loading}
              className="px-3 py-2 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
