import { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { login as mockLogin } from '../data/mockBackend.js';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState('student');
  const [isLoading, setIsLoading] = useState(true);

  // NEW controlled fields + auth state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 flex items-center justify-center p-6">
        <div className="text-center animate-fade-in">
          <div className="mb-8 animate-bounce-slow">
            <img 
              src="/Icon.png" 
              alt="InternHub" 
              className="w-24 h-24 mx-auto rounded-2xl shadow-2xl animate-pulse"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
            InternHub
          </h1>
          <p className="text-lg text-gray-600 mb-8 animate-slide-up-delay">
            Empowering Your Career Journey
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce-1"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce-2"></div>
            <div className="w-3 h-3 bg-cyan-600 rounded-full animate-bounce-3"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 flex items-center justify-center p-6 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-scale-in">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/Icon.png" alt="InternHub" className="w-12 h-12 rounded-lg" />
            <span className="text-2xl font-bold text-gray-900">InternHub</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-gray-600">
            {isSignUp
              ? 'Sign up to start your internship journey'
              : 'Sign in to continue to your dashboard'}
          </p>
        </div>

        {isSignUp && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">I am a:</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setRole('student')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  role === 'student'
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-semibold">Student</div>
                <div className="text-xs text-gray-500 mt-1">Looking for internships</div>
              </button>
              <button
                onClick={() => setRole('admin')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  role === 'admin'
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-semibold">Admin</div>
                <div className="text-xs text-gray-500 mt-1">Manage internships</div>
              </button>
            </div>
          </div>
        )}

        <form className="space-y-5" onSubmit={async (e) => {
          e.preventDefault();
          setAuthError('');
          setIsSubmitting(true);
          try {
            const user = await mockLogin(email.trim(), password);
            // persist "session"
            localStorage.setItem('internhub_user', JSON.stringify(user));
            // navigate according to role returned by backend
            if (user.role === 'admin') navigate('/admin/dashboard');
            else navigate('/student/dashboard');
          } catch (err) {
            setAuthError(err?.message || 'Login failed');
          } finally {
            setIsSubmitting(false);
          }
        }}>
          {isSignUp && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {authError && <div className="text-sm text-red-600">{authError}</div>}

          {!isSignUp && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 hover:shadow-lg"
          >
            {isSignUp ? 'Create Account' : (isSubmitting ? 'Signing in…' : 'Sign In')}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          </span>
          {' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
