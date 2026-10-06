import { AlertTriangle, CheckCircle2, Clock, TrendingUp } from 'lucide-react';
import { TaskCard } from '@/components/tasks/TaskCard';
import { Button } from '@/components/ui/Button';
import { useDemoStore } from '@/store/demo-store';
import { useAuthStore } from '@/store/auth-store';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const tasks = useDemoStore((state) => state.tasks);
  const currentUser = useAuthStore((state) => state.currentUser);
  const navigate = useNavigate();

  // Calculate stats
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  const dueToday = tasks.filter((t) => {
    const dueDate = new Date(t.dueAt);
    return dueDate >= today && dueDate < new Date(today.getTime() + 24 * 60 * 60 * 1000);
  }).length;

  const dueThisWeek = tasks.filter((t) => {
    const dueDate = new Date(t.dueAt);
    return dueDate >= today && dueDate < nextWeek;
  }).length;

  const highPriority = tasks.filter((t) => t.priority === 'critical' || t.priority === 'high').length;
  const completed = tasks.filter((t) => t.status === 'submitted').length;

  const upcomingTasks = tasks
    .filter((t) => t.status === 'pending')
    .sort((a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime())
    .slice(0, 4);

  const stats = [
    {
      name: 'Due Today',
      value: dueToday,
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      name: 'Due This Week',
      value: dueThisWeek,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      name: 'High Priority',
      value: highPriority,
      icon: AlertTriangle,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
    {
      name: 'Completed',
      value: completed,
      icon: CheckCircle2,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Good morning, {currentUser?.name}</h1>
        <p className="mt-2 text-gray-600">
          Here's what's coming up for you
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-lg p-6 mb-8 text-white">
        <h2 className="text-xl font-semibold mb-2">Upload a new notice</h2>
        <p className="text-white/90 mb-4">
          Let AI extract deadlines from your college notices automatically
        </p>
        <Button
          variant="secondary"
          onClick={() => navigate('/student/upload')}
        >
          Upload Notice
        </Button>
      </div>

      {/* Upcoming Tasks */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Upcoming Deadlines</h2>
          <Button variant="ghost" size="sm" onClick={() => navigate('/student/tasks')}>
            View All
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {upcomingTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onClick={() => navigate(`/student/tasks/${task.id}`)}
            />
          ))}
        </div>

        {upcomingTasks.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <CheckCircle2 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No upcoming deadlines
            </h3>
            <p className="text-gray-600">
              You're all caught up! Upload a notice to get started.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
