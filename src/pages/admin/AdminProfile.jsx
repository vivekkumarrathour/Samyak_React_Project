import AdminLayout from '../../components/AdminLayout.jsx';
import { Camera, Plus } from 'lucide-react';
import { useState } from 'react';
import { updateUser } from '../../data/siteData.js';

export default function AdminProfile() {
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('internhub_user') || 'null') : null;

  // controlled state
  const [form, setForm] = useState({
    name: user?.name || '',
    nickname: user?.nickname || '',
    phone: user?.phone || '',
    gender: user?.gender || '',
    country: user?.country || '',
    language: user?.language || 'English',
    timezone: user?.timezone || ''
  });
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');

  const handleChange = (key) => (e) => {
    setForm(prev => ({ ...prev, [key]: e.target.value }));
  };

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    setSaveMsg('');
    try {
      const patched = await updateUser(user.id, {
        name: form.name,
        nickname: form.nickname,
        phone: form.phone,
        gender: form.gender,
        country: form.country,
        language: form.language,
        timezone: form.timezone
      });
      localStorage.setItem('internhub_user', JSON.stringify(patched));
      setSaveMsg('Saved');
    } catch (err) {
      setSaveMsg('Save failed');
    } finally {
      setSaving(false);
      setTimeout(()=>setSaveMsg(''),2000);
    }
  };

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl h-48 mb-8 relative">
          <div className="absolute -bottom-16 left-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-bold text-gray-600">{user ? user.name.charAt(0) : 'A'}</span>
              </div>
              <button className="absolute bottom-2 right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
                <Camera className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="mt-20 bg-white rounded-xl border border-gray-200 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{user?.name || 'Admin User'}</h1>
              <p className="text-gray-600">{user?.email || 'admin@example.com'}</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg">
              Edit
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nick Name
              </label>
              <input
                type="text"
                placeholder="Your First Name"
                value={form.nickname}
                onChange={handleChange('nickname')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                value={form.gender}
                onChange={handleChange('gender')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                value={form.country}
                onChange={handleChange('country')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option>Select</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>India</option>
                <option>Australia</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={form.language}
                onChange={handleChange('language')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option>{user?.language || 'English'}</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Zone
              </label>
              <select
                value={form.timezone}
                onChange={handleChange('timezone')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option>Select</option>
                <option>UTC-5 (EST)</option>
                <option>UTC-8 (PST)</option>
                <option>UTC+0 (GMT)</option>
                <option>UTC+5:30 (IST)</option>
              </select>
            </div>
          </div>

          {/* Email Section */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">My email Address</h3>
            <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {user ? user.name.charAt(0) : 'A'}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{user?.email || 'admin@example.com'}</p>
                <p className="text-xs text-gray-500">1 month ago</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Email Address</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-4 mt-8 pt-8 border-t border-gray-200">
            <button className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-medium text-gray-700">
              Cancel
            </button>
            <button onClick={handleSave} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg font-medium">
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
          {saveMsg && <p className="mt-4 text-center text-sm text-gray-500">{saveMsg}</p>}
        </div>
      </div>
    </AdminLayout>
  );
}
