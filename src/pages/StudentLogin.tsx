import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/components/ui/LoginForm';
import { useAuthStore } from '@/store/auth-store';

export function StudentLogin() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  return (
    <LoginForm
      title="Student sign in"
      subtitle="Track your deadlines and never miss a submission."
      demo={{ email: 'student@deadlineai.com', password: 'student123' }}
      onBack={() => navigate('/')}
      onSubmit={login}
      redirectOnSuccess={() => navigate('/student/dashboard')}
    />
  );
}
