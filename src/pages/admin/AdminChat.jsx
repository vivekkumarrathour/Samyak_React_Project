import { useEffect, useState, useRef } from 'react';
import AdminLayout from '../../components/AdminLayout.jsx';
import { MessageSquare } from 'lucide-react';
import { getAllChats, getChatById, sendMessage } from '../../data/siteData.js';

export default function AdminChat() {
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [text, setText] = useState('');
  const scrollRef = useRef();

  useEffect(() => {
    (async () => {
      const all = await getAllChats();
      setChats(all);
      if (all.length) setActiveChatId(all[0].id);
    })();
  }, []);

  useEffect(() => {
    if (!activeChatId) return;
    (async () => {
      const chat = await getChatById(activeChatId);
      setChats(prev => {
        const rest = prev.filter(p => p.id !== chat.id);
        return [chat, ...rest];
      });
    })();
  }, [activeChatId]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chats, activeChatId]);

  const handleReply = async () => {
    if (!text.trim() || !activeChatId) return;
    await sendMessage({ chatId: activeChatId, from: 'admin', text: text.trim() });
    const updated = await getAllChats();
    setChats(updated);
    setText('');
  };

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-700">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Support Inbox</h1>
              <p className="text-sm text-gray-600">Respond to student support requests</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1 bg-white rounded-xl border p-4 h-[520px] overflow-auto">
            <div className="mb-4 text-sm text-gray-500">All conversations</div>
            <div className="space-y-3">
              {chats.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveChatId(c.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${activeChatId === c.id ? 'bg-purple-50' : 'hover:bg-gray-50'}`}
                >
                  <div className="font-medium">{c.subject}</div>
                  <div className="text-xs text-gray-500 truncate">
                    {c.messages[c.messages.length - 1]?.text}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">User: {c.userId}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-xl border p-4 flex flex-col h-[520px]">
            <div className="flex-1 overflow-auto mb-4" ref={scrollRef}>
              {!activeChatId && <div className="text-sm text-gray-500">Select a conversation to view messages.</div>}
              {activeChatId && (
                <div className="space-y-4">
                  {(chats.find(c => c.id === activeChatId)?.messages || []).map((m) => (
                    <div key={m.id} className={`max-w-[75%] p-3 rounded-lg ${m.from === 'admin' ? 'bg-purple-50 self-end' : 'bg-gray-100 self-start'}`}>
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
                  placeholder="Write a reply..."
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 outline-none"
                />
                <button onClick={handleReply} className="px-5 py-3 bg-purple-600 text-white rounded-lg">Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
