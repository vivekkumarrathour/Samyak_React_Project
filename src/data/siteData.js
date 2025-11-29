// Centralized demo "database" + small async helpers for the app (client-side mock)

const delay = (ms = 400) => new Promise((res) => setTimeout(res, ms));

const users = [
  {
    id: 'u_student_1',
    role: 'student',
    name: 'Vivek Kumar Rathour',
    email: 'vivek@student.local',
    password: 'password', // demo only
    studentId: '2400030562',
    avatarLetter: 'V',
    skills: ['React', 'Node.js', 'Python']
  },
  {
    id: 'u_student_2',
    role: 'student',
    name: 'Alice Johnson',
    email: 'alice@student.local',
    password: 'password',
    studentId: '2400030789',
    avatarLetter: 'A',
    skills: ['Figma', 'UX']
  },
  {
    id: 'u_admin_1',
    role: 'admin',
    name: 'Admin User',
    email: 'admin@internhub.local',
    password: 'password',
    avatarLetter: 'A',
    permissions: ['manage_internships', 'manage_users']
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
  applyToInternship
};
