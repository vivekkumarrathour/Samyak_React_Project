import { Users, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/Icon.png" alt="InternHub" className="w-10 h-10 rounded-lg" />
            <span className="text-xl font-bold text-gray-900">InternHub</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#internships" className="text-gray-600 hover:text-gray-900 transition-colors">Internships</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>

          <Link to="/login" className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg">
            Sign In
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Manage and Track <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Remote Internships
              </span>{' '}
              Easily
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-slide-up-delay">
              Get immediate access to all the platform designed for empowering your career growth
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up-delay-2">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 group">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse-slow"></div>
            <div className="relative bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl aspect-video flex items-center justify-center shadow-xl p-8 hover:scale-105 transition-transform duration-500">
              <img src="/Icon.png" alt="InternHub Platform" className="w-full h-full object-contain animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose InternHub Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose InternHub?</h2>
            <p className="text-lg text-gray-600">
              Everything you need to track remote internships for growing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Remote First</h3>
              <p className="text-gray-600 leading-relaxed">
                Built specifically for remote internship programs and distributed teams
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up-delay group">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Progress Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Track intern progress, completed tasks, and performance metrics in real-time
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up-delay-2 group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Award className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Mentorship</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect interns with experienced mentors for guidance and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Internships */}
      <section id="internships" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Internships</h2>
            <p className="text-lg text-gray-600">Explore exciting opportunities from top companies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Software Engineering',
                company: 'TechCorp',
                duration: '3 months',
                rating: 4.8,
                badge: 'Remote'
              },
              {
                title: 'Digital Marketing',
                company: 'MarketPro',
                duration: '4 months',
                rating: 4.7,
                badge: 'Hybrid'
              },
              {
                title: 'UI/UX Design',
                company: 'DesignStudio',
                duration: '3 months',
                rating: 4.9,
                badge: 'Remote'
              }
            ].map((internship, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full group-hover:scale-110 transition-transform">
                    {internship.badge}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500 group-hover:scale-125 transition-transform">★</span>
                    <span className="text-sm font-medium text-gray-700">{internship.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{internship.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{internship.company}</p>
                <p className="text-gray-600 text-sm mb-6">{internship.duration}</p>

                <button className="w-full border-2 border-gray-900 text-gray-900 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105">
              View all internships
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 opacity-50 animate-pulse-slow"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-scale-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
            Ready to Start Your Remote Internship Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 animate-slide-up-delay">
            Join thousands of students and companies connecting through our platform
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:scale-110 animate-slide-up-delay-2 group">
            <span className="inline-block group-hover:scale-110 transition-transform">Get Started Today</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/Icon.png" alt="InternHub" className="w-8 h-8 rounded-lg" />
                <span className="text-xl font-bold text-white">InternHub</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering the next generation through remote internship opportunities.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integration</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 InternHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
