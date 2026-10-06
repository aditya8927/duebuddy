import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/components/ui/LoginForm';
import { useAuthStore } from '@/store/auth-store';

export function TeacherLogin() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  return (
    <LoginForm
      title="Teacher sign in"
      subtitle="Manage assignments, deadlines and notices."
      demo={{ email: 'teacher@deadlineai.com', password: 'teacher123' }}
      onBack={() => navigate('/')}
      onSubmit={login}
      redirectOnSuccess={() => navigate('/teacher/dashboard')}
    />
  );
}
