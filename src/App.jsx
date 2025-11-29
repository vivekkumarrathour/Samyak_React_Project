import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

import StudentDashboard from './pages/student/StudentDashboard.jsx';
import StudentInternships from './pages/student/StudentInternships.jsx';
import StudentApplications from './pages/student/StudentApplications.jsx';
import StudentFeedback from './pages/student/StudentFeedback.jsx';
import StudentProfile from './pages/student/StudentProfile.jsx';
import StudentChat from './pages/student/StudentChat.jsx';

import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AdminInternships from './pages/admin/AdminInternships.jsx';
import AdminTasks from './pages/admin/AdminTasks.jsx';
import AdminSchedule from './pages/admin/AdminSchedule.jsx';
import AdminProfile from './pages/admin/AdminProfile.jsx';
import AdminChat from './pages/admin/AdminChat.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/internships" element={<StudentInternships />} />
        <Route path="/student/applications" element={<StudentApplications />} />
        <Route path="/student/feedback" element={<StudentFeedback />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/support" element={<StudentChat />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/internships" element={<AdminInternships />} />
        <Route path="/admin/tasks" element={<AdminTasks />} />
        <Route path="/admin/schedule" element={<AdminSchedule />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/support" element={<AdminChat />} />
      </Routes>
    </Router>
  );
}
