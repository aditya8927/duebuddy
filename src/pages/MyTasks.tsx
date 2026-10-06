import { useState } from 'react';
import { TaskCard } from '@/components/tasks/TaskCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { CheckSquare } from 'lucide-react';
import { useDemoStore } from '@/store/demo-store';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

type TabType = 'all' | 'today' | 'upcoming' | 'completed';

export function MyTasks() {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const tasks = useDemoStore((state) => state.tasks);
  const navigate = useNavigate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const filteredTasks = tasks.filter((task) => {
    const dueDate = new Date(task.dueAt);

    switch (activeTab) {
      case 'today':
        return dueDate >= today && dueDate < tomorrow && task.status === 'pending';
      case 'upcoming':
        return dueDate >= tomorrow && task.status === 'pending';
      case 'completed':
        return task.status === 'submitted';
      default:
        return true;
    }
  });

  const tabs: { id: TabType; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'today', label: 'Today' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Tasks</h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap',
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tasks Grid */}
      {filteredTasks.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onClick={() => navigate(`/tasks/${task.id}`)}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<CheckSquare className="w-16 h-16" />}
          title="No tasks found"
          description={`You don't have any ${activeTab === 'all' ? '' : activeTab + ' '}tasks.`}
        />
      )}
    </div>
  );
}
