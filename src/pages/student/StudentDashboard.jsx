import StudentLayout from '../../components/StudentLayout.jsx';
import { Briefcase, FileText, CheckCircle, TrendingUp, ArrowRight, Clock, Star } from 'lucide-react';

export default function StudentDashboard() {
	// NEW: read session user
	const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('internhub_user') || 'null') : null;

	return (
		<StudentLayout>
			<div className="p-8">
				{/* Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">
						Welcome, {user?.name || 'Student'}!
					</h1>
					<p className="text-gray-600">Student ID: {user?.studentId || '2400030562'}</p>
				</div>

				{/* Internship Applications Section */}
				<section className="mb-8">
					<h2 className="text-xl font-bold text-gray-900 mb-6">Internship Applications</h2>
					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								title: 'Software Engineering',
								company: 'TechCorp',
								duration: '3 months',
								type: 'Remote',
								rating: 4.8
							},
							{
								title: 'Digital Marketing',
								company: 'MarketPro',
								duration: '4 months',
								type: 'Hybrid',
								rating: 4.7
							},
							{
								title: 'UI/UX Design',
								company: 'DesignStudio',
								duration: '3 months',
								type: 'Remote',
								rating: 4.9
							}
						].map((internship, index) => (
							<div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group">
								<div className="flex items-start justify-between mb-4">
									<span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
										{internship.type}
									</span>
									<div className="flex items-center space-x-1">
										<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
										<span className="text-sm font-medium text-gray-700">{internship.rating}</span>
									</div>
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-2">{internship.title}</h3>
								<p className="text-blue-600 font-medium text-sm mb-2">{internship.company}</p>
								<p className="text-gray-500 text-sm mb-4 flex items-center">
									<Clock className="w-4 h-4 mr-1" />
									{internship.duration}
								</p>
								<button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg">
									<span>Apply Now</span>
									<ArrowRight className="w-4 h-4" />
								</button>
							</div>
						))}
					</div>
				</section>

				<div className="grid lg:grid-cols-3 gap-8">
					{/* Left Column - Feedback & Reports */}
					<div className="lg:col-span-2 space-y-6">
						{/* Feedback & Reports */}
						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<h2 className="text-xl font-bold text-gray-900 mb-6">Feedback & Reports</h2>

							<div className="grid grid-cols-3 gap-4 mb-6">
								<div className="bg-green-50 rounded-lg p-4 text-center">
									<div className="text-3xl font-bold text-green-700 mb-1">8.5</div>
									<div className="text-xs text-gray-600">Performance</div>
									<div className="text-xs text-gray-500">out of 10</div>
								</div>
								<div className="bg-blue-50 rounded-lg p-4 text-center">
									<div className="text-3xl font-bold text-blue-700 mb-1">24</div>
									<div className="text-xs text-gray-600">Tasks Done</div>
									<div className="text-xs text-gray-500">of 28 total</div>
								</div>
								<div className="bg-purple-50 rounded-lg p-4 text-center">
									<div className="text-3xl font-bold text-purple-700 mb-1">4.8</div>
									<div className="text-xs text-gray-600">Avg Rating</div>
									<div className="text-xs text-gray-500">from mentors</div>
								</div>
							</div>

							<div className="space-y-4">
								<h3 className="font-semibold text-gray-900 text-sm">Recent Mentor Comments</h3>
								{[
									{
										mentor: 'John Smith',
										comment: 'Excellent progress on the React project. Keep up the great work!',
										time: '2 hours ago'
									},
									{
										mentor: 'Sarah Johnson',
										comment: 'Good understanding of the concepts. Try to improve code documentation.',
										time: '1 day ago'
									}
								].map((item, index) => (
									<div key={index} className="bg-gray-50 rounded-lg p-4">
										<div className="flex items-start justify-between mb-2">
											<p className="font-medium text-gray-900 text-sm">{item.mentor}</p>
											<span className="text-xs text-gray-500">{item.time}</span>
										</div>
										<p className="text-sm text-gray-600">{item.comment}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right Column - Performance Chart */}
					<div className="space-y-6">
						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<h3 className="font-bold text-gray-900 mb-6">Performance Overview</h3>

							<div className="space-y-4">
								{[
									{ label: 'Code Quality', value: 85, color: 'bg-blue-600' },
									{ label: 'Communication', value: 92, color: 'bg-green-600' },
									{ label: 'Punctuality', value: 78, color: 'bg-yellow-600' },
									{ label: 'Problem Solving', value: 88, color: 'bg-purple-600' }
								].map((skill, index) => (
									<div key={index}>
										<div className="flex items-center justify-between mb-2">
											<span className="text-sm font-medium text-gray-700">{skill.label}</span>
											<span className="text-sm font-bold text-gray-900">{skill.value}%</span>
										</div>
										<div className="h-2 bg-gray-200 rounded-full overflow-hidden">
											<div
												className={`h-full ${skill.color} transition-all duration-500`}
												style={{ width: `${skill.value}%` }}
											/>
										</div>
									</div>
								))}
							</div>

							<div className="mt-6 pt-6 border-t border-gray-200">
								<div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
									<div className="flex items-center justify-between">
										<div>
											<p className="text-sm font-medium text-gray-900">Overall Progress</p>
											<p className="text-xs text-gray-600 mt-1">Great job this week!</p>
										</div>
										<div className="text-3xl font-bold text-blue-700">86%</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StudentLayout>
	);
}
