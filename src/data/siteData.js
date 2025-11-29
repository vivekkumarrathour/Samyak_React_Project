// Centralized demo "database" + small async helpers for the app (client-side mock)

const delay = (ms = 400) => new Promise((res) => setTimeout(res, ms));

// Replace/ensure users entries include profile fields (phone, gender, country, language, timezone, nickname)
const users = [
	{
		id: 'u_student_1',
		role: 'student',
		name: 'Vivek Kumar Rathour',
		email: 'vivek@gmail.com',
		password: 'password',
		studentId: '2400030562',
		avatarLetter: 'V',
		nickname: 'Vivek',
		phone: '+91 70000 00001',
		gender: 'Male',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		yearOfStudy: 'Third Year', // <- added
		skills: ['React', 'Node.js', 'Python']
	},
	{
		id: 'u_student_2',
		role: 'student',
		name: 'Alice Johnson',
		email: 'alice@gmail.com',
		password: 'password',
		studentId: '2400030789',
		avatarLetter: 'A',
		nickname: 'Alice',
		phone: '+1 555 000-0001',
		gender: 'Female',
		country: 'United States',
		language: 'English',
		timezone: 'UTC-5 (EST)',
		yearOfStudy: 'Second Year', // <- added
		skills: ['Figma', 'UX']
	},
	{
		id: 'u_student_3',
		role: 'student',
		name: 'Aditya Patel',
		email: 'aditya@gmail.com',
		password: 'password',
		studentId: '2400030662',
		avatarLetter: 'A',
		nickname: 'Aditya',
		phone: '+91 70000 00003',
		gender: 'Male',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		yearOfStudy: 'First Year', // <- added
		skills: ['HTML', 'CSS', 'Python']
	},
	{
		id: 'u_student_4',
		role: 'student',
		name: 'Raghuram Pasupuleti',
		email: 'raghuram@gmail.com',
		password: 'password',
		studentId: '2400031015',
		avatarLetter: 'R',
		nickname: 'Raghuram',
		phone: '+91 70000 00004',
		gender: 'Male',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		yearOfStudy: 'Third Year', // <- added
		skills: ['BOOTSTRAP', 'Tailwind CSS', 'Python']
	},{
		id: 'u_student_5',
		role: 'student',
		name: 'Sonal Singh',
		email: 'sonal@gmail.com',
		password: 'password',
		studentId: '2400033062',
		avatarLetter: 'S',
		nickname: 'Sonal',
		phone: '+91 70000 00005',
		gender: 'Female',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		yearOfStudy: 'Second Year', // <- added
		skills: ['JAVA', 'MySQL', 'c++']
	},
	{
		id: 'u_student_6',
		role: 'student',
		name: 'Karan Mehta',
		email: 'karan@gmail.com',
		password: 'password',
		studentId: '2400031262',
		avatarLetter: 'K',
		nickname: 'Karan',
		phone: '+91 70000 00006',
		gender: 'Male',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		yearOfStudy: 'First Year', // <- added
		skills: ['Javascript', 'Node.js', 'C']
	},
	{
		id: 'u_student_7',
		role: 'student',
		name: 'Pragya Kumari',
		email: 'pragya@gmail.com',
		password: 'password',
		studentId: '2400033304',
		avatarLetter: 'P',
		nickname: 'Pragya',
		phone: '+91 70000 00007',
		gender: 'Female',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		yearOfStudy: 'Third Year', // <- added
		skills: ['React js', 'Javascript', 'Python']
	},
	{
		id: 'u_student_8',
		role: 'student',
		name: 'Avinash Kumar',
		email: 'avinash@gmail.com',
		password: 'password',
		studentId: '2400030952',
		avatarLetter: 'A',
		nickname: 'Avinash',
		phone: '+91 70000 00008',
		gender: 'Male',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		yearOfStudy: 'Second Year', // <- added
		skills: ['React', 'Typescript', 'c/c++']
	},
	{
		id: 'u_student_9',
		role: 'student',
		name: 'Akhil Sharma',
		email: 'akhil@gmail.com',
		password: 'password',
		studentId: '2400032432',
		avatarLetter: 'A',
		nickname: 'Akhil',
		phone: '+91 70000 00009',
		gender: 'Male',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		yearOfStudy: 'First Year', // <- added
		skills: ['React', 'Docker', 'Github']
	},
	{
		id: 'u_student_10',
		role: 'student',
		name: 'Nagasai Akhil',
		email: 'nagasai@gmail.com',
		password: 'password',
		studentId: '2400032430',
		avatarLetter: 'N',
		nickname: 'Nagasai',
		phone: '+91 70000 00010',
		gender: 'Male',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		yearOfStudy: 'Third Year', // <- added
		skills: ['Numpy', 'Pandas', 'Matplotlib']
	},
	{
		id: 'u_admin_1',
		role: 'admin',
		name: 'Naga Gopi',
		email: 'naga@gmail.com',
		password: 'password',
		avatarLetter: 'N',
		nickname: 'Naga',
		phone: '+91 70000 00010',
		gender: 'Male',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		permissions: ['manage_internships', 'manage_users']
	},
	{
		id: 'u_admin_2',
		role: 'admin',
		name: 'Pragya Kumari',
		email: 'pragya@gmail.com',
		password: 'password',
		avatarLetter: 'P',
		nickname: 'Pragya',
		phone: '+91 70000 00007',
		gender: 'Female',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		permissions: ['Access complete platform data', 'Update platform configuration']
	},
	{
		id: 'u_admin_3',
		role: 'admin',
		name: 'Vivek Kumar Rathour',
		email: 'vivek@gmail.com',
		password: 'password',
		avatarLetter: 'V',
		nickname: 'Vivek',
		phone: '+91 70000 00001',
		gender: 'Male',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		permissions: ['Control email/app notifications', 'Add, update, or delete users']
	},
	{
		id: 'u_admin_4',
		role: 'admin',
		name: 'Raghuram Pasupuleti',
		email: 'raghuram@gmail.com',
		password: 'password',
		avatarLetter: 'R',
		nickname: 'Raghuram',
		phone: '+91 70000 00004',
		gender: 'Male',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		permissions: ['Add/update/delete internship listings', 'Super admin permissions']
	},
	{
		id: 'u_admin_5',
		role: 'admin',
		name: 'Aditya Patel',
		email: 'aditya@gmail.com',
		password: 'password',
		avatarLetter: 'A',
		nickname: 'Aditya',
		phone: '+91 70000 00003',
		gender: 'Male',
		country: 'India',
		language: 'English',
		timezone: 'UTC+5:30 (IST)',
		permissions: ['Edit roles', 'manage_users']
	}
];

const internships = [
	{
		id: 'i_1',
		title: 'Full Stack Developer Intern',
		department: 'Engineering',
		type: 'Remote',
		duration: '6 months',
		stipend: '$1,200/month',
		applicants: 45,
		status: 'active',
		postedDate: '2025-10-15',
		location: 'Remote',
		skills: ['React', 'Node.js', 'MongoDB']
	},
	{
		id: 'i_2',
		title: 'UI/UX Design Intern',
		department: 'Design',
		type: 'Hybrid',
		duration: '3 months',
		stipend: '$800/month',
		applicants: 32,
		status: 'active',
		postedDate: '2025-10-20',
		location: 'New York, NY',
		skills: ['Figma', 'Prototyping']
	},
	{
		id: 'i_3',
		title: 'Data Science Intern',
		department: 'Analytics',
		type: 'On-site',
		duration: '4 months',
		stipend: '$1,000/month',
		applicants: 28,
		status: 'active',
		postedDate: '2025-10-25',
		location: 'San Francisco, CA',
		skills: ['Python', 'Machine Learning']
	},
	// featured small list used on landing
	{
		id: 'i_4',
		title: 'Software Engineering Intern',
		company: 'TechCorp',
		duration: '3 months',
		type: 'Remote',
		rating: 4.8,
		posted: '2 days ago',
		skills: ['React', 'Node.js', 'TypeScript']
	}
];

const applications = [
	{
		id: 'a_1',
		userId: 'u_student_1',
		internshipId: 'i_4',
		internship: 'Software Engineering Intern',
		company: 'TechCorp',
		appliedDate: '2025-01-15',
		status: 'accepted',
		type: 'Remote'
	},
	{
		id: 'a_2',
		userId: 'u_student_1',
		internshipId: 'i_2',
		internship: 'UI/UX Design Intern',
		company: 'DesignStudio',
		appliedDate: '2025-01-20',
		status: 'pending',
		type: 'Remote'
	},
	{
		id: 'a_3',
		userId: 'u_student_2',
		internshipId: 'i_3',
		internship: 'Data Science Intern',
		company: 'DataLabs',
		appliedDate: '2025-01-25',
		status: 'interview',
		type: 'Hybrid'
	},
	// recent applications for admin view
	{
		id: 'a_4',
		userName: 'John Doe',
		internship: 'Software Engineering',
		position: 'Software Engineering',
		date: '2025-01-28',
		status: 'pending'
	},
	{
		id: 'a_5',
		userName: 'Jane Smith',
		internship: 'UI/UX Design',
		position: 'UI/UX Design',
		date: '2025-01-27',
		status: 'interview'
	}
];

const events = [
	{ id: 'e1', title: 'Team Stand-up Meeting', color: 'bg-blue-500', time: '09:00 AM', description: 'Daily sync with intern team' },
	{ id: 'e2', title: 'Client Presentation Review', color: 'bg-purple-500', time: '11:00 AM', description: 'Review intern project presentations' },
	{ id: 'e3', title: 'One-on-One Mentoring Sessions', color: 'bg-green-500', time: '02:00 PM', description: 'Individual progress discussions' },
	{ id: 'e4', title: 'Performance Evaluation Workshop', color: 'bg-orange-500', time: '04:00 PM', description: 'Quarterly intern assessments' },
	{ id: 'e5', title: 'Team Building Activity', color: 'bg-pink-500', time: '05:00 PM', description: 'Virtual team bonding session' }
];

const calendarEvents = [
	{ id: 'ce1', day: 0, time: 0, duration: 1, title: 'Team Stand-up', color: 'bg-blue-500' },
	{ id: 'ce2', day: 1, time: 2, duration: 2, title: 'Client Presentation', color: 'bg-purple-500' },
	{ id: 'ce3', day: 2, time: 5, duration: 1, title: 'Mentoring Session', color: 'bg-green-500' },
	{ id: 'ce4', day: 3, time: 1, duration: 1, title: 'Code Review', color: 'bg-yellow-500' },
	{ id: 'ce5', day: 4, time: 7, duration: 1, title: 'Performance Review', color: 'bg-orange-500' }
];

const tasks = [
	{ id: 't1', title: 'Complete project proposal', description: 'Draft and finalize the internship project proposal document', priority: 'high', assignedTo: 'u_student_1', dueDate: '2025-02-03', progress: 60 },
	{ id: 't2', title: 'Review intern applications', description: 'Go through pending intern applications and shortlist candidates', priority: 'medium', assignedTo: 'u_admin_1', dueDate: '2025-01-28', progress: 0 },
	{ id: 't3', title: 'Schedule team meeting', description: 'Coordinate and schedule weekly sync meeting with the development team', priority: 'low', assignedTo: 'u_student_2', dueDate: '2025-02-19', progress: 22 }
];

const feedback = [
	{ id: 'f1', userId: 'u_student_1', title: 'Great mentorship experience', category: 'Mentorship', content: 'The mentor guidance has been excellent throughout my internship journey.', rating: 5, status: 'resolved', date: '2025-01-20', adminReply: "Thank you for your positive feedback! We're glad you had a great experience." },
	{ id: 'f2', userId: 'u_student_1', title: 'Need more resources for learning', category: 'Resources', content: 'Would appreciate more documentation and learning materials for the tech stack.', rating: 4, status: 'in_progress', date: '2025-01-28', adminReply: "We're working on adding more resources. Thanks for your suggestion!" }
];

// ---------- CHATS (new) ----------
const chats = [
	{
		id: 'c_1',
		userId: 'u_student_1',
		subject: 'Issue with project access',
		status: 'open',
		messages: [
			{ id: 'm_1', from: 'user', text: 'Hi, I cannot access the project repo.', time: new Date().toISOString() },
			{ id: 'm_2', from: 'admin', text: 'Hi Vivek — can you share the repo link you are trying to access?', time: new Date().toISOString() }
		],
		createdAt: new Date().toISOString()
	},
	{
		id: 'c_2',
		userId: 'u_student_2',
		subject: 'Need guidance on interview',
		status: 'open',
		messages: [
			{ id: 'm_1', from: 'user', text: 'Can I get tips for the upcoming interview?', time: new Date().toISOString() }
		],
		createdAt: new Date().toISOString()
	}
];

// Chat helpers
export async function getChatsByUser(userId) {
	await delay(200);
	return chats.filter(c => c.userId === userId);
}

export async function getChatById(chatId) {
	await delay(150);
	return chats.find(c => c.id === chatId) || null;
}

export async function getAllChats() {
	await delay(200);
	return chats;
}

/**
 * sendMessage
 * - if chatId provided, append message to existing chat
 * - if no chatId provided, creates a new chat for userId with subject
 */
export async function sendMessage({ chatId = null, userId, from, text, subject = 'Support Request' }) {
	await delay(200);
	const time = new Date().toISOString();
	if (chatId) {
		const chat = chats.find(c => c.id === chatId);
		if (!chat) throw new Error('Chat not found');
		const msg = { id: `m_${Date.now()}`, from, text, time };
		chat.messages.push(msg);
		chat.status = chat.status || 'open';
		return { chat, msg };
	} else {
		const newChat = {
			id: `c_${Date.now()}`,
			userId,
			subject,
			status: 'open',
			messages: [{ id: `m_${Date.now()}`, from, text, time }],
			createdAt: time
		};
		chats.unshift(newChat);
		return { chat: newChat, msg: newChat.messages[0] };
	}
}

export async function markChatRead(chatId) {
	await delay(100);
	const chat = chats.find(c => c.id === chatId);
	if (!chat) throw new Error('Chat not found');
	// no-op for demo, but useful hook
	return chat;
}

// ---------- END CHATS ----------

// NEW: allow updating a user in-memory (demo only)
export async function updateUser(id, patch = {}) {
	await delay(200);
	const idx = users.findIndex(u => u.id === id);
	if (idx === -1) throw new Error('User not found');
	users[idx] = { ...users[idx], ...patch };
	const { password: pw, ...safe } = users[idx];
	return safe;
}

// Helpers (simulate async backend)
export async function login(email, password) {
	await delay(600);
	const u = users.find((x) => x.email.toLowerCase() === (email || '').toLowerCase());
	if (!u) throw new Error('User not found');
	if (u.password !== password) throw new Error('Invalid credentials');
	const { password: pw, ...safe } = u;
	return safe;
}

export async function getUserById(id) {
	await delay(200);
	const u = users.find((x) => x.id === id);
	if (!u) return null;
	const { password: pw, ...safe } = u;
	return safe;
}

export async function getUserByEmail(email) {
	await delay(200);
	const u = users.find((x) => x.email.toLowerCase() === (email || '').toLowerCase());
	if (!u) return null;
	const { password: pw, ...safe } = u;
	return safe;
}

export async function getAllUsers() {
	await delay(200);
	return users.map(({ password: pw, ...rest }) => rest);
}

export async function getInternships() {
	await delay(300);
	return internships;
}

export async function getInternshipById(id) {
	await delay(200);
	return internships.find(i => i.id === id) || null;
}

export async function getApplications() {
	await delay(300);
	return applications;
}

export async function getApplicationsByUser(userId) {
	await delay(250);
	return applications.filter(a => a.userId === userId);
}

export async function getEvents() {
	await delay(250);
	return events;
}

export async function getCalendarEvents() {
	await delay(250);
	return calendarEvents;
}

export async function getTasks() {
	await delay(250);
	return tasks;
}

export async function getFeedback() {
	await delay(250);
	return feedback;
}

export async function getFeedbackByUser(userId) {
	await delay(200);
	return feedback.filter(f => f.userId === userId);
}

// Simple in-memory updates for demo
export async function applyToInternship({ userId, internshipId }) {
	await delay(300);
	const newApp = {
		id: `a_${Date.now()}`,
		userId,
		internshipId,
		internship: internships.find(i => i.id === internshipId)?.title || 'Unknown',
		company: internships.find(i => i.id === internshipId)?.company || '',
		appliedDate: new Date().toISOString().slice(0,10),
		status: 'pending',
		type: internships.find(i => i.id === internshipId)?.type || 'Remote'
	};
	applications.unshift(newApp);
	return newApp;
}

export default {
	users,
	internships,
	applications,
	events,
	calendarEvents,
	tasks,
	feedback,
	chats,
	login,
	getUserById,
	getUserByEmail,
	getAllUsers,
	getInternships,
	getInternshipById,
	getApplications,
	getApplicationsByUser,
	getEvents,
	getCalendarEvents,
	getTasks,
	getFeedback,
	getFeedbackByUser,
	applyToInternship,
	getChatsByUser,
	getChatById,
	getAllChats,
	sendMessage,
	markChatRead,
	updateUser
};
