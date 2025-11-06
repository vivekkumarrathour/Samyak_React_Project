import StudentLayout from '../../components/StudentLayout.jsx';
import { FileText, Clock, CheckCircle, XCircle, Eye } from 'lucide-react';

export default function StudentApplications() {
  const stats = [
    { label: 'Total Applied', value: '3', icon: FileText, color: 'blue' },
    { label: 'Under Review', value: '0', icon: Clock, color: 'yellow' },
    { label: 'Accepted', value: '1', icon: CheckCircle, color: 'green' },
    { label: 'Rejected', value: '0', icon: XCircle, color: 'red' }
  ];

  const applications = [
    {
      id: '1',
      internship: 'Software Engineering Intern',
      company: 'TechCorp',
      appliedDate: '2025-01-15',
      status: 'accepted',
      type: 'Remote'
    },
    {
      id: '2',
      internship: 'UI/UX Design Intern',
      company: 'DesignStudio',
      appliedDate: '2025-01-20',
      status: 'pending',
      type: 'Remote'
    },
    {
      id: '3',
      internship: 'Data Science Intern',
      company: 'DataLabs',
      appliedDate: '2025-01-25',
      status: 'interview',
      type: 'Hybrid'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'interview':
        return 'bg-blue-100 text-blue-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <StudentLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Applications</h1>
          <p className="text-gray-600">Track your internship application status</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorMap = {
              blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
              yellow: { bg: 'bg-yellow-50', icon: 'text-yellow-600', border: 'border-yellow-200' },
              green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
              red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' }
            };
            const colors = colorMap[stat.color];

            return (
              <div
                key={index}
                className={`${colors.bg} border ${colors.border} rounded-xl p-6 hover:shadow-md transition-all duration-200`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Application History */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Application History</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {applications.map((application) => (
              <div
                key={application.id}
                className="p-6 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {application.internship}
                      </h3>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          application.type === 'Remote'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {application.type}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium text-sm mb-2">{application.company}</p>
                    <p className="text-sm text-gray-500">
                      Applied on {new Date(application.appliedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span
                      className={`text-xs font-semibold px-4 py-2 rounded-full ${getStatusColor(
                        application.status
                      )}`}
                    >
                      {getStatusText(application.status)}
                    </span>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <Eye className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State (if no applications) */}
        {applications.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Applications Yet</h3>
            <p className="text-gray-600 mb-6">
              Start applying to internships to see your applications here
            </p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg">
              Browse Internships
            </button>
          </div>
        )}
      </div>
    </StudentLayout>
  );
}
