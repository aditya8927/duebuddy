import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { TeacherLayout } from './components/layout/TeacherLayout';
import { RoleSelection } from './pages/RoleSelection';
import { TeacherLogin } from './pages/TeacherLogin';
import { StudentLogin } from './pages/StudentLogin';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { Dashboard } from './pages/Dashboard';
import { MyTasks } from './pages/MyTasks';
import { TaskDetail } from './pages/TaskDetail';
import { UploadNotice } from './pages/UploadNotice';
import { Calendar } from './pages/Calendar';
import { Notifications } from './pages/Notifications';
import { AIAssistant } from './pages/AIAssistant';
import { Analytics } from './pages/Analytics';
import { Settings } from './pages/Settings';
import { useAuthStore } from './store/auth-store';

function ProtectedRoute({ children, requiredRole }: { children: React.ReactNode; requiredRole?: 'teacher' | 'student' }) {
  const { isAuthenticated, currentUser } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && currentUser?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<RoleSelection />} />
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/student/login" element={<StudentLogin />} />

        {/* Teacher routes */}
        <Route
          path="/teacher/*"
          element={
            <ProtectedRoute requiredRole="teacher">
              <TeacherLayout>
                <Routes>
                  <Route path="/dashboard" element={<TeacherDashboard />} />
                  <Route path="/upload" element={<UploadNotice />} />
                  <Route path="/deadlines" element={<MyTasks />} />
                  <Route path="/reports" element={<Analytics />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<Navigate to="/teacher/dashboard" replace />} />
                </Routes>
              </TeacherLayout>
            </ProtectedRoute>
          }
        />

        {/* Student routes */}
        <Route
          path="/student/*"
          element={
            <ProtectedRoute requiredRole="student">
              <Layout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/tasks" element={<MyTasks />} />
                  <Route path="/tasks/:id" element={<TaskDetail />} />
                  <Route path="/upload" element={<UploadNotice />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/assistant" element={<AIAssistant />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<Navigate to="/student/dashboard" replace />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
