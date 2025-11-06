import StudentLayout from '../../components/StudentLayout.jsx';
import { MessageSquare, Plus, TrendingUp, Clock, CheckCircle, Star } from 'lucide-react';

export default function StudentFeedback() {
  const stats = [
    { label: 'Total Submitted', value: '2', icon: MessageSquare, color: 'blue' },
    { label: 'Pending', value: '0', icon: Clock, color: 'yellow' },
    { label: 'Resolved', value: '1', icon: CheckCircle, color: 'green' },
    { label: 'Avg Rating', value: '4.5', icon: Star, color: 'purple' }
  ];

  const feedbackHistory = [
    {
      id: '1',
      title: 'Great mentorship experience',
      category: 'Mentorship',
      content: 'The mentor guidance has been excellent throughout my internship journey.',
      rating: 5,
      status: 'resolved',
      date: '2025-01-20',
      adminReply: "Thank you for your positive feedback! We're glad you had a great experience."
    },
    {
      id: '2',
      title: 'Need more resources for learning',
      category: 'Resources',
      content: 'Would appreciate more documentation and learning materials for the tech stack.',
      rating: 4,
      status: 'in_progress',
      date: '2025-01-28',
      adminReply: "We're working on adding more resources. Thanks for your suggestion!"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-700';
      case 'in_progress':
        return 'bg-blue-100 text-blue-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Mentorship: 'bg-purple-100 text-purple-700',
      Resources: 'bg-blue-100 text-blue-700',
      Technical: 'bg-orange-100 text-orange-700',
      General: 'bg-gray-100 text-gray-700'
    };
    return colors[category] || colors.General;
  };

  return (
    <StudentLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Feedback & Support</h1>
            <p className="text-gray-600">Share your thoughts and get help</p>
          </div>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Submit Feedback</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorMap = {
              blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
              yellow: { bg: 'bg-yellow-50', icon: 'text-yellow-600', border: 'border-yellow-200' },
              green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
              purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' }
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

        {/* Feedback History */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Feedback History</h2>
          </div>

        <div className="p-6 space-y-6">
            {feedbackHistory.map((feedback) => (
              <div
                key={feedback.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{feedback.title}</h3>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(feedback.category)}`}>
                        {feedback.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{feedback.content}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < feedback.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span>•</span>
                      <span>{new Date(feedback.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap ${getStatusColor(feedback.status)}`}>
                    {feedback.status === 'in_progress' ? 'In Progress' : feedback.status.charAt(0).toUpperCase() + feedback.status.slice(1)}
                  </span>
                </div>

                {feedback.adminReply && (
                  <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        A
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm mb-1">Admin Reply</p>
                        <p className="text-sm text-gray-700">{feedback.adminReply}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {feedbackHistory.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Feedback Yet</h3>
            <p className="text-gray-600 mb-6">
              Share your thoughts or report issues to help us improve
            </p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg">
              Submit Your First Feedback
            </button>
          </div>
        )}
      </div>
    </StudentLayout>
  );
}
