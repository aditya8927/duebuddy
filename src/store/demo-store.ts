import { create } from 'zustand';
import type { Task, Notification } from '../types';

interface DemoStore {
  tasks: Task[];
  notifications: Notification[];
  addTask: (task: Task) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  markNotificationRead: (id: string) => void;
}

const DEMO_USER = 'student-1';

const DEMO_TASKS: Task[] = [
  {
    id: '1',
    userId: DEMO_USER,
    title: 'DBMS Assignment',
    subject: 'Database Management',
    type: 'assignment',
    dueAt: '2026-10-12T23:59:00',
    priority: 'high',
    progress: 0,
    status: 'pending',
    source: {
      file: 'college_notice.pdf',
      page: 2,
      snippet: 'DBMS Assignment due October 12th at 11:59 PM. Submit on the learning portal.',
    },
    accountability: {
      on: false,
      channels: ['in-app', 'email'],
      intensity: 'smart',
    },
    createdAt: '2026-10-06T10:00:00',
  },
  {
    id: '2',
    userId: DEMO_USER,
    title: 'OS Lab Submission',
    subject: 'Operating Systems',
    type: 'lab',
    dueAt: '2026-10-16T17:00:00',
    priority: 'medium',
    progress: 60,
    status: 'pending',
    source: {
      file: 'college_notice.pdf',
      page: 3,
      snippet: 'Operating Systems Lab work must be submitted by 5:00 PM on October 16th.',
    },
    accountability: {
      on: false,
      channels: ['in-app'],
      intensity: 'smart',
    },
    createdAt: '2026-10-06T10:00:00',
  },
  {
    id: '3',
    userId: DEMO_USER,
    title: 'Mid-Semester Exam',
    subject: 'Computer Networks',
    type: 'exam',
    dueAt: '2026-10-18T09:00:00',
    priority: 'critical',
    progress: 0,
    status: 'pending',
    source: {
      file: 'college_notice.pdf',
      page: 1,
      snippet: 'Mid-Semester examination for Computer Networks scheduled on 18th October at 9:00 AM.',
    },
    accountability: {
      on: false,
      channels: ['in-app', 'email'],
      intensity: 'urgent',
    },
    createdAt: '2026-10-06T10:00:00',
  },
];

const DEMO_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'reminder',
    taskId: '1',
    message: 'DBMS Assignment due in 6 days',
    read: false,
    createdAt: '2026-10-06T10:00:00',
  },
  {
    id: '2',
    type: 'alert',
    message: '⚠️ Academic Load Alert: 3 important deadlines detected',
    read: false,
    createdAt: '2026-10-06T09:30:00',
  },
];

export const useDemoStore = create<DemoStore>((set) => ({
  tasks: DEMO_TASKS,
  notifications: DEMO_NOTIFICATIONS,

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === id ? { ...task, ...updates } : task)),
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  markNotificationRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      ),
    })),
}));
