import { useState } from 'react';
import { Plus, Upload, Calendar, CheckSquare, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/store/auth-store';
import { useDemoStore } from '@/store/demo-store';
import { formatDateTime } from '@/lib/utils';

export function TeacherDashboard() {
  const currentUser = useAuthStore((state) => state.currentUser);
  const tasks = useDemoStore((state) => state.tasks);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const publishedDeadlines = tasks.length;
  const upcomingDeadlines = tasks.filter(
    (t) => new Date(t.dueAt) > new Date() && t.status === 'pending'
  ).length;

  const stats = [
    { label: 'Published Deadlines', value: publishedDeadlines, icon: CheckSquare, color: 'text-emerald-600' },
    { label: 'Upcoming', value: upcomingDeadlines, icon: Calendar, color: 'text-blue-600' },
    { label: 'Submissions Pending', value: tasks.filter(t => t.status === 'pending').length, icon: AlertCircle, color: 'text-amber-600' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {currentUser?.name}
        </h1>
        <p className="text-gray-600">Manage academic deadlines and notices</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="justify-start"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create Assignment
          </Button>
          <Button variant="secondary" className="justify-start">
            <Plus className="w-5 h-5 mr-2" />
            Create Exam
          </Button>
          <Button variant="secondary" className="justify-start">
            <Upload className="w-5 h-5 mr-2" />
            Upload Notice/PDF
          </Button>
          <Button variant="secondary" className="justify-start">
            <AlertCircle className="w-5 h-5 mr-2" />
            Create Announcement
          </Button>
        </div>
      </div>

      {/* Create Form (Coming in Phase 2) */}
      {showCreateForm && (
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Create New Assignment
          </h3>
          <p className="text-gray-600">
            Assignment creation form will be implemented in Phase 2 with Supabase integration.
            Teachers will be able to create assignments that automatically appear in student dashboards.
          </p>
        </div>
      )}

      {/* Published Deadlines */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Published Deadlines</h2>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{task.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{task.subject}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span>Due: {formatDateTime(task.dueAt)}</span>
                    <span className="capitalize">Type: {task.type}</span>
                    <span className="capitalize">Status: {task.status}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost">Edit</Button>
                  <Button size="sm" variant="ghost">Delete</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
