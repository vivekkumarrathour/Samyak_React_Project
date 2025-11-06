import AdminLayout from '../../components/AdminLayout.jsx';
import { Plus, Search, Filter, Briefcase, Users, CheckCircle, Clock, MapPin, DollarSign, Eye, Edit } from 'lucide-react';

export default function AdminInternships() {
  const stats = [
    { label: 'Total Internships', value: '24', icon: Briefcase, color: 'blue', change: '+3 this month' },
    { label: 'Active Postings', value: '12', icon: CheckCircle, color: 'green', change: '6 new applicants' },
    { label: 'Total Applicants', value: '156', icon: Users, color: 'purple', change: '+24 this week' },
    { label: 'Pending Reviews', value: '8', icon: Clock, color: 'orange', change: 'Requires attention' }
  ];

  const internships = [
    {
      id: 1,
      title: 'Full Stack Developer Intern',
      department: 'Engineering',
      type: 'Remote',
      duration: '6 months',
      stipend: '$1,200/month',
      applicants: 45,
      status: 'active',
      postedDate: '2025-10-15',
      location: 'Remote'
    },
    {
      id: 2,
      title: 'UI/UX Design Intern',
      department: 'Design',
      type: 'Hybrid',
      duration: '3 months',
      stipend: '$800/month',
      applicants: 32,
      status: 'active',
      postedDate: '2025-10-20',
      location: 'New York, NY'
    },
    {
      id: 3,
      title: 'Data Science Intern',
      department: 'Analytics',
      type: 'On-site',
      duration: '4 months',
      stipend: '$1,000/month',
      applicants: 28,
      status: 'active',
      postedDate: '2025-10-25',
      location: 'San Francisco, CA'
    }
  ];

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Internship Management</h1>
            <p className="text-gray-600">Create, manage, and track internship opportunities</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:shadow-lg flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Post New Internship</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorMap = {
              blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
              green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
              purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' },
              orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600', accent: 'bg-orange-600' }
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
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 font-medium mb-2">{stat.label}</p>
                <p className={`text-xs ${colors.icon} font-semibold`}>{stat.change}</p>
              </div>
            );
          })}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search internships by title, department, or location..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            <div className="flex gap-3">
              <select className="px-6 py-3 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors font-medium text-gray-700 outline-none bg-white">
                <option>All Status</option>
                <option>Active</option>
                <option>Closed</option>
                <option>Draft</option>
              </select>
              <button className="px-6 py-3 rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors flex items-center space-x-2 bg-white">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="font-medium text-gray-700">Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Active Internships */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Active Internships</h2>
                <p className="text-sm text-gray-500">{internships.length} positions currently open</p>
              </div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                {internships.filter(i => i.status === 'active').length} Active
              </span>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {internships.map((internship) => (
              <div
                key={internship.id}
                className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 bg-gradient-to-r from-white to-gray-50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {internship.title.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {internship.title}
                        </h3>
                        <p className="text-sm text-blue-600 font-semibold">{internship.department}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2 bg-white rounded-lg p-3 border border-gray-100">
                        <MapPin className="w-5 h-5 text-purple-600" />
                        <div>
                          <p className="text-xs text-gray-500">Location</p>
                          <p className="font-semibold text-gray-900 text-sm">{internship.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 bg-white rounded-lg p-3 border border-gray-100">
                        <Clock className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="text-xs text-gray-500">Duration</p>
                          <p className="font-semibold text-gray-900 text-sm">{internship.duration}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 bg-white rounded-lg p-3 border border-gray-100">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-xs text-gray-500">Stipend</p>
                          <p className="font-semibold text-gray-900 text-sm">{internship.stipend}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 bg-white rounded-lg p-3 border border-gray-100">
                        <Users className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-xs text-gray-500">Applicants</p>
                          <p className="font-semibold text-gray-900 text-sm">{internship.applicants} applied</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-bold uppercase">
                        {internship.type}
                      </span>
                      <span className="text-xs text-gray-500">
                        Posted on {new Date(internship.postedDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      {internship.status === 'active' && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-semibold flex items-center space-x-1">
                          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                          <span>Active</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="ml-4 flex flex-col space-y-2">
                    <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:shadow-lg">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                      <Edit className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-gray-200 bg-gray-50 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg font-semibold">
              View All {internships.length} Internships
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
