import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Msg[];
  onDelta: (t: string) => void;
  onDone: () => void;
  onError: (e: string) => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok) {
    const data = await resp.json().catch(() => ({}));
    onError(data.error || "Something went wrong. Please try again.");
    return;
  }
  if (!resp.body) { onError("No response"); return; }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  let done = false;

  while (!done) {
    const { done: d, value } = await reader.read();
    if (d) break;
    buf += decoder.decode(value, { stream: true });

    let idx: number;
    while ((idx = buf.indexOf("\n")) !== -1) {
      let line = buf.slice(0, idx);
      buf = buf.slice(idx + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;
      const json = line.slice(6).trim();
      if (json === "[DONE]") { done = true; break; }
      try {
        const p = JSON.parse(json);
        const c = p.choices?.[0]?.delta?.content;
        if (c) onDelta(c);
      } catch {
        buf = line + "\n" + buf;
        break;
      }
    }
  }
  onDone();
}

const INITIAL_SUGGESTIONS = [
  "What's my business worth?",
  "How do I sell my business?",
  "Tell me about your AI & automation services",
  "What industries do you specialize in?",
  "How long does the M&A process take?",
];

const FOLLOW_UP_SUGGESTIONS: Record<string, string[]> = {
  "What's my business worth?": [
    "What multiples apply to my industry?",
    "How can I increase my valuation?",
    "Schedule a free valuation consultation",
  ],
  "How do I sell my business?": [
    "What documents do I need to prepare?",
    "How do you find qualified buyers?",
    "What are your M&A advisory fees?",
  ],
  "Tell me about your AI & automation services": [
    "What kind of ROI can I expect?",
    "Which processes can be automated?",
    "How does automation impact my exit valuation?",
  ],
  "What industries do you specialize in?": [
    "Tell me about healthcare M&A in Florida",
    "What are construction company multiples?",
    "How do you value a technology company?",
  ],
  "How long does the M&A process take?": [
    "What can delay a deal?",
    "How do I prepare for due diligence?",
    "What's the difference between a broker and M&A advisor?",
  ],
};

const DEFAULT_FOLLOW_UPS = [
  "Can I get a free valuation?",
  "What makes CBH different?",
  "I'd like to schedule a consultation",
];

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const send = async (overrideText?: string) => {
    const text = (overrideText || input).trim();
    if (!text || loading) return;
    const userMsg: Msg = { role: "user", content: text };
    const newMsgs = [...messages, userMsg];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);

    let assistantSoFar = "";
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    await streamChat({
      messages: newMsgs,
      onDelta: upsert,
      onDone: () => setLoading(false),
      onError: (e) => {
        setMessages((prev) => [...prev, { role: "assistant", content: e }]);
        setLoading(false);
      },
    });
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-20 sm:bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-20 sm:bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-4rem)] flex flex-col rounded-lg border border-border bg-card shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary">
            <div>
              <p className="font-heading text-sm font-semibold text-foreground">
                CBH Advisor
              </p>
              <p className="text-xs text-muted-foreground">
                Ask us anything about selling or growing your business
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm py-4">
                <p className="font-heading font-semibold text-foreground mb-2">
                  Welcome to CBH Business Group
                </p>
                <p className="mb-4">
                  Ask about business valuations, the selling process, growth
                  strategies, or anything M&A-related.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {INITIAL_SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs px-3 py-1.5 rounded-full border border-border bg-background text-foreground hover:bg-secondary transition-colors text-left"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {m.role === "assistant" ? (
                    <div className="prose prose-sm prose-invert max-w-none [&>p]:mb-1 [&>ul]:mb-1 [&>ol]:mb-1">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  ) : (
                    m.content
                  )}
                </div>
              </div>
            ))}
            {/* Follow-up suggestions after assistant reply */}
            {!loading && messages.length >= 2 && messages[messages.length - 1]?.role === "assistant" && (() => {
              const firstUserMsg = messages.find(m => m.role === "user")?.content || "";
              const followUps = FOLLOW_UP_SUGGESTIONS[firstUserMsg] || DEFAULT_FOLLOW_UPS;
              return (
                <div className="flex flex-wrap gap-2 pt-1">
                  {followUps.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs px-3 py-1.5 rounded-full border border-border bg-background text-foreground hover:bg-secondary transition-colors text-left"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              );
            })()}
            {loading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex justify-start">
                <div className="bg-secondary rounded-lg px-3 py-2">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="border-t border-border p-3 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 bg-background border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-primary text-primary-foreground rounded px-3 py-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
