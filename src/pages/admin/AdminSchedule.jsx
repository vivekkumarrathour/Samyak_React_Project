import AdminLayout from '../../components/AdminLayout.jsx';
import { Plus, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export default function AdminSchedule() {
  const events = [
    { 
      title: 'Team Stand-up Meeting', 
      color: 'bg-blue-500',
      time: '09:00 AM',
      description: 'Daily sync with intern team'
    },
    { 
      title: 'Client Presentation Review', 
      color: 'bg-purple-500',
      time: '11:00 AM',
      description: 'Review intern project presentations'
    },
    { 
      title: 'One-on-One Mentoring Sessions', 
      color: 'bg-green-500',
      time: '02:00 PM',
      description: 'Individual progress discussions'
    },
    { 
      title: 'Performance Evaluation Workshop', 
      color: 'bg-orange-500',
      time: '04:00 PM',
      description: 'Quarterly intern assessments'
    },
    { 
      title: 'Team Building Activity', 
      color: 'bg-pink-500',
      time: '05:00 PM',
      description: 'Virtual team bonding session'
    }
  ];

  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
  const weekDays = [
    { label: 'Mon', date: 6 },
    { label: 'Tue', date: 7 },
    { label: 'Wed', date: 8 },
    { label: 'Thu', date: 9 },
    { label: 'Fri', date: 10 },
    { label: 'Sat', date: 11 },
    { label: 'Sun', date: 12 }
  ];

  // Calendar events positioned on the grid
  const calendarEvents = [
    { day: 0, time: 0, duration: 1, title: 'Team Stand-up', color: 'bg-blue-500' },
    { day: 1, time: 2, duration: 2, title: 'Client Presentation', color: 'bg-purple-500' },
    { day: 2, time: 5, duration: 1, title: 'Mentoring Session', color: 'bg-green-500' },
    { day: 3, time: 1, duration: 1, title: 'Code Review', color: 'bg-yellow-500' },
    { day: 4, time: 7, duration: 1, title: 'Performance Review', color: 'bg-orange-500' },
    { day: 0, time: 5, duration: 1, title: 'Team Building', color: 'bg-pink-500' },
    { day: 3, time: 4, duration: 2, title: 'Workshop', color: 'bg-indigo-500' },
  ];

  const getEventAtPosition = (dayIndex, timeIndex) => {
    return calendarEvents.find(event => event.day === dayIndex && event.time === timeIndex);
  };

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule Management</h1>
            <p className="text-gray-600">Organize meetings, workshops, and mentoring sessions</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Add New Event</span>
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="text-blue-100 text-sm font-medium">Total Events</div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                📅
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">28</div>
            <div className="text-blue-100 text-sm">This month</div>
            <div className="mt-4 flex items-center space-x-2">
              <div className="flex-1 bg-white/20 rounded-full h-2">
                <div className="bg-white rounded-full h-2" style={{ width: '75%' }}></div>
              </div>
              <span className="text-xs text-blue-100">75%</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="text-green-100 text-sm font-medium">Completed</div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                ✓
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">21</div>
            <div className="text-green-100 text-sm">Successfully done</div>
            <div className="mt-4 flex items-center space-x-2">
              <div className="flex-1 bg-white/20 rounded-full h-2">
                <div className="bg-white rounded-full h-2" style={{ width: '88%' }}></div>
              </div>
              <span className="text-xs text-green-100">88%</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="text-purple-100 text-sm font-medium">Upcoming</div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                ⏰
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">7</div>
            <div className="text-purple-100 text-sm">Next 7 days</div>
            <div className="mt-4 flex items-center space-x-2">
              <div className="flex-1 bg-white/20 rounded-full h-2">
                <div className="bg-white rounded-full h-2" style={{ width: '60%' }}></div>
              </div>
              <span className="text-xs text-purple-100">60%</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="text-orange-100 text-sm font-medium">Attendance Rate</div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                👥
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">94%</div>
            <div className="text-orange-100 text-sm">Average rate</div>
            <div className="mt-4 flex items-center space-x-2">
              <div className="flex-1 bg-white/20 rounded-full h-2">
                <div className="bg-white rounded-full h-2" style={{ width: '94%' }}></div>
              </div>
              <span className="text-xs text-orange-100">+5%</span>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Calendar Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-bold text-gray-900">November 2025</h2>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
                  <span className="font-medium text-gray-700">Month View</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                  Today
                </button>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            <div className="grid grid-cols-8 gap-4">
              {/* Week label */}
              <div className="text-sm font-semibold text-gray-600">Week</div>
              {/* Day headers */}
              {weekDays.map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-semibold text-gray-600 mb-2">{day.label}</div>
                  <div className="text-2xl font-bold text-gray-900">{day.date}</div>
                </div>
              ))}

              {/* Time slots */}
              {timeSlots.map((time, timeIndex) => (
                <div key={timeIndex} className="col-span-8 grid grid-cols-8 gap-4">
                  <div className="text-sm text-orange-600 font-medium">{time}</div>
                  {weekDays.map((_, dayIndex) => {
                    const event = getEventAtPosition(dayIndex, timeIndex);
                    return (
                      <div key={dayIndex} className="border-t border-gray-100 pt-2 min-h-[60px] relative">
                        {event && (
                          <div 
                            className={`${event.color} text-white rounded-lg p-2 text-xs font-medium cursor-pointer hover:opacity-90 transition-opacity shadow-sm`}
                            style={{ height: `${event.duration * 60}px` }}
                          >
                            <div className="font-semibold mb-1">{event.title}</div>
                            <div className="text-white/80 text-[10px]">{time}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Upcoming Events</h3>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {events.length} events scheduled
            </span>
          </div>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <div className={`w-12 h-12 ${event.color} rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0`}>
                  {event.time.split(':')[0]}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">{event.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <span>⏰</span>
                      <span>{event.time}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span>📅</span>
                      <span>Week 45</span>
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
