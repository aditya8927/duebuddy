export type TaskType = 'assignment' | 'exam' | 'lab' | 'registration' | 'other';
export type TaskStatus = 'pending' | 'submitted' | 'missed';
export type TaskPriority = 'critical' | 'high' | 'medium' | 'low';
export type IntensityLevel = 'smart' | 'urgent' | 'custom';
export type NotificationChannel = 'in-app' | 'email' | 'whatsapp';

export interface TaskSource {
  file: string;
  page?: number;
  snippet: string;
}

export interface AccountabilitySettings {
  on: boolean;
  channels: NotificationChannel[];
  intensity: IntensityLevel;
}

export interface Task {
  id: string;
  userId: string;
  title: string;
  subject: string;
  type: TaskType;
  dueAt: string;
  priority: TaskPriority;
  progress: number;
  status: TaskStatus;
  source?: TaskSource;
  accountability: AccountabilitySettings;
  submittedAt?: string;
  createdAt: string;
}

export type UserRole = 'teacher' | 'student';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Notification {
  id: string;
  type: 'reminder' | 'escalation' | 'alert' | 'info';
  taskId?: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface ParentContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  email?: string;
  enabled: boolean;
}
