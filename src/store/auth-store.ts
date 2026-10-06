import { create } from 'zustand';
import type { User, UserRole } from '../types';

interface AuthStore {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Demo accounts for hackathon MVP
const DEMO_ACCOUNTS = {
  teacher: {
    id: 'teacher-1',
    name: 'Professor Ahmed',
    email: 'teacher@deadlineai.com',
    password: 'teacher123',
    role: 'teacher' as UserRole,
  },
  student: {
    id: 'student-1',
    name: 'Sultan',
    email: 'student@deadlineai.com',
    password: 'student123',
    role: 'student' as UserRole,
  },
};

export const useAuthStore = create<AuthStore>((set) => ({
  currentUser: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    // Simple demo authentication
    const account = Object.values(DEMO_ACCOUNTS).find(
      (acc) => acc.email === email && acc.password === password
    );

    if (account) {
      const { password: _, ...user } = account;
      set({ currentUser: user, isAuthenticated: true });
      return true;
    }

    return false;
  },

  logout: () => {
    set({ currentUser: null, isAuthenticated: false });
  },
}));
