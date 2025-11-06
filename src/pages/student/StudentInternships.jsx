import StudentLayout from '../../components/StudentLayout.jsx';
import { Search, Filter, MapPin, Clock, Star, ChevronDown } from 'lucide-react';

export default function StudentInternships() {
  const internships = [
    {
      title: 'Software Engineering Intern',
      company: 'TechCorp',
      location: 'Remote',
      type: 'Remote',
      duration: '3 months',
      skills: ['React', 'Node.js', 'TypeScript'],
      rating: 4.8,
      posted: '2 days ago'
    },
    {
      title: 'Digital Marketing Intern',
      company: 'MarketPro',
      location: 'New York, NY',
      type: 'Hybrid',
      duration: '4 months',
      skills: ['SEO', 'Social Media', 'Analytics'],
      rating: 4.7,
      posted: '5 days ago'
    },
    {
      title: 'UI/UX Design Intern',
      company: 'DesignStudio',
      location: 'Remote',
      type: 'Remote',
      duration: '3 months',
      skills: ['Figma', 'Sketch', 'Prototyping'],
      rating: 4.9,
      posted: '1 week ago'
    },
    {
      title: 'Data Science Intern',
      company: 'DataLabs',
      location: 'San Francisco, CA',
      type: 'Hybrid',
      duration: '6 months',
      skills: ['Python', 'Machine Learning', 'SQL'],
      rating: 4.6,
      posted: '3 days ago'
    },
    {
      title: 'Product Management Intern',
      company: 'StartupXYZ',
      location: 'Remote',
      type: 'Remote',
      duration: '4 months',
      skills: ['Agile', 'Product Strategy', 'Analysis'],
      rating: 4.5,
      posted: '1 day ago'
    },
    {
      title: 'Mobile App Developer Intern',
      company: 'AppMakers',
      location: 'Boston, MA',
      type: 'Onsite',
      duration: '5 months',
      skills: ['React Native', 'iOS', 'Android'],
      rating: 4.7,
      posted: '4 days ago'
    }
  ];

  return (
    <StudentLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Internships</h1>
          <p className="text-gray-600">Find the perfect internship opportunity for you</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search internships, companies, skills..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center space-x-2">
                <span className="font-medium text-gray-700">All types</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              <button className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="font-medium text-gray-700">Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Internships Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    internship.type === 'Remote'
                      ? 'bg-green-100 text-green-700'
                      : internship.type === 'Hybrid'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-orange-100 text-orange-700'
                  }`}
                >
                  {internship.type}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">{internship.rating}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {internship.title}
              </h3>
              <p className="text-blue-600 font-medium text-sm mb-3">{internship.company}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  {internship.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  {internship.duration}
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {internship.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">{internship.posted}</span>
                <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  Apply Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg font-medium">
            Load More Internships
          </button>
        </div>
      </div>
    </StudentLayout>
  );
}
