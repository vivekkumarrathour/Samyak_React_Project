import { useEffect, useState, useRef } from 'react';
import StudentLayout from '../../components/StudentLayout.jsx';
import { MessageSquare } from 'lucide-react';
import { getChatsByUser, sendMessage, getChatById } from '../../data/siteData.js';

export default function StudentChat() {
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('internhub_user') || 'null') : null;
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [text, setText] = useState('');
  const scrollRef = useRef();

  useEffect(() => {
    if (!user) return;
    (async () => {
      const c = await getChatsByUser(user.id);
      setChats(c);
      if (c.length) setActiveChat(c[0].id);
    })();
  }, [user]);

  useEffect(() => {
    if (!activeChat) return;
    (async () => {
      const chat = await getChatById(activeChat);
      setChats(prev => {
        const rest = prev.filter(p => p.id !== chat.id);
        return [chat, ...rest];
      });
    })();
  }, [activeChat]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chats, activeChat]);

  const handleSend = async () => {
    if (!text.trim()) return;
    const payload = { chatId: activeChat || null, userId: user.id, from: 'user', text: text.trim(), subject: 'Support' };
    const res = await sendMessage(payload);
    const updated = await getChatsByUser(user.id);
    setChats(updated);
    setText('');
    setActiveChat(res.chat.id);
  };

  return (
    <StudentLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Support Chat</h1>
              <p className="text-sm text-gray-600">Ask admins for help — support replies will appear here.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1 bg-white rounded-xl border p-4 h-[480px] overflow-auto">
            <div className="mb-4 text-sm text-gray-500">Your conversations</div>
            {chats.length === 0 && <div className="text-sm text-gray-500">No conversations yet — start a new chat below.</div>}
            <div className="space-y-3">
              {chats.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveChat(c.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${activeChat === c.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                >
                  <div className="font-medium">{c.subject}</div>
                  <div className="text-xs text-gray-500 truncate">{c.messages[c.messages.length - 1]?.text}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-xl border p-4 flex flex-col h-[480px]">
            <div className="flex-1 overflow-auto mb-4" ref={scrollRef}>
              {!activeChat && <div className="text-sm text-gray-500">Open a conversation or send a new message.</div>}
              {activeChat && (
                <div className="space-y-4">
                  {(chats.find(c => c.id === activeChat)?.messages || []).map((m) => (
                    <div key={m.id} className={`max-w-[70%] p-3 rounded-lg ${m.from === 'user' ? 'bg-blue-50 self-end' : 'bg-gray-100 self-start'}`}>
                      <div className="text-sm text-gray-900">{m.text}</div>
                      <div className="text-xs text-gray-500 mt-1">{new Date(m.time).toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-3 border-t">
              <div className="flex items-center gap-3">
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Write a message to support..."
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 outline-none"
                />
                <button onClick={handleSend} className="px-5 py-3 bg-blue-600 text-white rounded-lg">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
