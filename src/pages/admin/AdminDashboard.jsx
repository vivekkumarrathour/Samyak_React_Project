import AdminLayout from '../../components/AdminLayout.jsx';
import { Users, Briefcase, CheckCircle, TrendingUp, Eye, Bell } from 'lucide-react';

export default function AdminDashboard() {
	// NEW: read session user
	const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('internhub_user') || 'null') : null;

	const stats = [
		{ label: 'Applied', value: '12', change: '+12%', icon: Users, color: 'blue' },
		{ label: 'Active', value: '3', change: '+8%', icon: Briefcase, color: 'purple' },
		{ label: 'Tasks Completed', value: '28', change: '+15%', icon: CheckCircle, color: 'green' },
		{ label: 'Progress', value: '75%', change: '+5%', icon: TrendingUp, color: 'orange' }
	];

	const recentApplications = [
		{
			name: 'John Doe',
			position: 'Software Engineering',
			date: '2025-01-28',
			status: 'pending'
		},
		{
			name: 'Jane Smith',
			position: 'UI/UX Design',
			date: '2025-01-27',
			status: 'interview'
		},
		{
			name: 'Mike Johnson',
			position: 'Data Science',
			date: '2025-01-26',
			status: 'accepted'
		}
	];

	const notifications = [
		{
			title: 'New Application Received',
			description: 'John Doe applied for Software Engineering',
			time: '2 hours ago',
			type: 'application'
		},
		{
			title: 'Task Deadline Approaching',
			description: 'Review intern applications due in 2 days',
			time: '5 hours ago',
			type: 'task'
		},
		{
			title: 'Feedback Submitted',
			description: 'Sarah Wilson submitted feedback',
			time: '1 day ago',
			type: 'feedback'
		}
	];

	const tasks = [
		{ label: 'Review new applications', completed: false },
		{ label: 'Schedule team meeting', completed: true },
		{ label: 'Update internship listings', completed: false },
		{ label: 'Send weekly reports', completed: true }
	];

	const getStatusColor = (status) => {
		switch (status) {
			case 'accepted':
				return 'bg-green-100 text-green-700';
			case 'pending':
				return 'bg-yellow-100 text-yellow-700';
			case 'interview':
				return 'bg-blue-100 text-blue-700';
			default:
				return 'bg-gray-100 text-gray-700';
		}
	};

	return (
		<AdminLayout>
			<div className="p-8">
				{/* Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
					<p className="text-gray-600">Welcome back{user ? `, ${user.name}` : ''}! Here's your overview</p>
				</div>

				{/* Stats Cards */}
				<div className="grid md:grid-cols-4 gap-6 mb-8">
					{stats.map((stat, index) => {
						const Icon = stat.icon;
						const colorMap = {
							blue: { bg: 'bg-blue-500', icon: 'text-blue-500' },
							purple: { bg: 'bg-purple-500', icon: 'text-purple-500' },
							green: { bg: 'bg-green-500', icon: 'text-green-500' },
							orange: { bg: 'bg-orange-500', icon: 'text-orange-500' }
						};
						const colors = colorMap[stat.color];

						return (
							<div
								key={index}
								className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200"
							>
								<div className="flex items-center justify-between mb-4">
									<div className={`w-12 h-12 ${colors.bg} bg-opacity-10 rounded-lg flex items-center justify-center`}>
										<Icon className={`w-6 h-6 ${colors.icon}`} />
									</div>
									<span className="text-green-600 text-sm font-semibold">{stat.change}</span>
								</div>
								<p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
								<p className="text-sm text-gray-600 font-medium">{stat.label}</p>
							</div>
						);
					})}
				</div>

				<div className="grid lg:grid-cols-3 gap-8">
					{/* Recent Applications */}
					<div className="lg:col-span-2 bg-white rounded-xl border border-gray-200">
						<div className="p-6 border-b border-gray-200">
							<h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
						</div>
						<div className="divide-y divide-gray-200">
							{recentApplications.map((application, index) => (
								<div key={index} className="p-6 hover:bg-gray-50 transition-colors group">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-4">
											<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
												{application.name.charAt(0)}
											</div>
											<div>
												<h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
													{application.name}
												</h3>
												<p className="text-sm text-gray-600">{application.position}</p>
												<p className="text-xs text-gray-500 mt-1">
													Applied {new Date(application.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
												</p>
											</div>
										</div>
										<div className="flex items-center space-x-3">
											<span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(application.status)}`}>
												{application.status.charAt(0).toUpperCase() + application.status.slice(1)}
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

					{/* Right Column */}
					<div className="space-y-6">
						{/* Notifications */}
						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<div className="flex items-center justify-between mb-6">
								<h3 className="font-bold text-gray-900">Notifications</h3>
								<Bell className="w-5 h-5 text-gray-400" />
							</div>
							<div className="space-y-4">
								{notifications.map((notification, index) => (
									<div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
										<p className="font-semibold text-sm text-gray-900 mb-1">{notification.title}</p>
										<p className="text-xs text-gray-600 mb-2">{notification.description}</p>
										<p className="text-xs text-gray-500">{notification.time}</p>
									</div>
								))}
							</div>
						</div>

						{/* Tasks */}
						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<h3 className="font-bold text-gray-900 mb-6">Tasks</h3>
							<div className="space-y-3">
								{tasks.map((task, index) => (
									<label key={index} className="flex items-center space-x-3 cursor-pointer group">
										<input
											type="checkbox"
											defaultChecked={task.completed}
											className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
										/>
										<span className={`text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-gray-700 group-hover:text-gray-900'}`}>
											{task.label}
										</span>
									</label>
								))}
							</div>
						</div>

						{/* Progress Overview */}
						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<h3 className="font-bold text-gray-900 mb-4">Progress Overview</h3>
							<div className="space-y-2">
								<div className="flex items-center justify-between text-sm mb-2">
									<span className="text-gray-600">Overall Completion</span>
									<span className="font-bold text-gray-900">75%</span>
								</div>
								<div className="h-3 bg-gray-200 rounded-full overflow-hidden">
									<div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500" style={{ width: '75%' }} />
								</div>
								<p className="text-xs text-gray-500 mt-2">Great progress this week!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AdminLayout>
	);
}
