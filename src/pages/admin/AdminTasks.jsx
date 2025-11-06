import AdminLayout from '../../components/AdminLayout.jsx';
import { Plus, Eye, CheckCircle, Clock, AlertCircle, TrendingUp } from 'lucide-react';

export default function AdminTasks() {
  const taskStats = [
    { label: 'Total Tasks', value: '24', icon: CheckCircle, color: 'blue', change: '+3' },
    { label: 'In Progress', value: '8', icon: Clock, color: 'orange', change: '+2' },
    { label: 'High Priority', value: '5', icon: AlertCircle, color: 'red', change: '-1' },
    { label: 'Completion Rate', value: '78%', icon: TrendingUp, color: 'green', change: '+5%' }
  ];

  const activeTasks = [
    {
      title: 'Complete project proposal',
      description: 'Draft and finalize the internship project proposal document',
      priority: 'high',
      assignedTo: 'student@example.com',
      dueDate: '2025-02-03',
      progress: 60
    },
    {
      title: 'Review intern applications',
      description: 'Go through pending intern applications and shortlist candidates',
      priority: 'medium',
      assignedTo: 'admin@example.com',
      dueDate: '2025-01-28',
      progress: 0
    },
    {
      title: 'Schedule team meeting',
      description: 'Coordinate and schedule weekly sync meeting with the development team',
      priority: 'low',
      assignedTo: 'student@example.com',
      dueDate: '2025-02-19',
      progress: 22
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-orange-100 text-orange-700';
      case 'low':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Task Management</h1>
            <p className="text-gray-600">Organize and track intern assignments and project milestones</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:shadow-lg flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Create New Task</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {taskStats.map((stat, index) => {
            const Icon = stat.icon;
            const colorMap = {
              blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
              orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600', accent: 'bg-orange-600' },
              red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600', accent: 'bg-red-600' },
              green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', accent: 'bg-green-600' }
            };
            const colors = colorMap[stat.color];

            return (
              <div
                key={index}
                className={`${colors.bg} border-2 ${colors.border} rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${colors.accent} rounded-lg flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm font-bold ${colors.icon} bg-white px-3 py-1 rounded-full`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Active Tasks */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Active Tasks</h2>
                <p className="text-sm text-gray-500">{activeTasks.length} tasks currently in progress</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Filter
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Sort
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {activeTasks.map((task, index) => {
              const priorityConfig = {
                high: { border: 'border-l-red-500', bg: 'bg-red-50/50' },
                medium: { border: 'border-l-orange-500', bg: 'bg-orange-50/50' },
                low: { border: 'border-l-blue-500', bg: 'bg-blue-50/50' }
              };
              const config = priorityConfig[task.priority];

              return (
                <div
                  key={index}
                  className={`border-2 border-gray-200 border-l-4 ${config.border} rounded-xl p-6 hover:shadow-xl transition-all duration-200 group hover:-translate-y-1 ${config.bg}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {task.title}
                        </h3>
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${getPriorityColor(task.priority)} uppercase tracking-wide`}>
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{task.description}</p>

                      <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                        <div className="flex items-center space-x-2 bg-white rounded-lg p-3 border border-gray-100">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-xs">
                              {task.assignedTo.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Assigned to</p>
                            <p className="font-semibold text-gray-900">{task.assignedTo}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 bg-white rounded-lg p-3 border border-gray-100">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <Clock className="w-4 h-4 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Due Date</p>
                            <p className="font-semibold text-gray-900">
                              {new Date(task.dueDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 bg-white rounded-lg p-4 border border-gray-100">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-600 font-semibold">Task Progress</span>
                          <span className="font-bold text-blue-600 text-lg">{task.progress}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 shadow-sm"
                            style={{ width: `${task.progress}%` }}
                          />
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                          <span>Started</span>
                          <span>{task.progress < 100 ? 'In Progress' : 'Completed'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="ml-4 flex flex-col space-y-2">
                      <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:shadow-lg">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                        <span className="text-gray-600">✏️</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
