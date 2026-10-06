import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, BookOpen, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PriorityBadge } from '@/components/tasks/PriorityBadge';
import { Countdown } from '@/components/tasks/Countdown';
import { formatDateTime } from '@/lib/utils';
import { useDemoStore } from '@/store/demo-store';

export function TaskDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tasks = useDemoStore((state) => state.tasks);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Task not found</h2>
        <Button onClick={() => navigate('/tasks')}>Back to Tasks</Button>
      </div>
    );
  }

  const statusConfig = {
    pending: { label: '⚠️ Still Pending', color: 'text-amber-700 bg-amber-50 border-amber-200' },
    submitted: { label: '✓ Submitted', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
    missed: { label: '✗ Missed', color: 'text-red-700 bg-red-50 border-red-200' },
  };

  const status = statusConfig[task.status];

  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate('/tasks')}
        className="mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tasks
      </Button>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{task.title}</h1>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <BookOpen className="w-5 h-5" />
              <span>{task.subject}</span>
              <span className="text-gray-400">•</span>
              <span className="capitalize">{task.type}</span>
            </div>
          </div>
          <PriorityBadge priority={task.priority} />
        </div>

        {/* Status */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border font-medium mb-6 ${status.color}`}>
          {status.label}
        </div>

        {/* Deadline */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-600">Due Date</p>
              <p className="font-semibold text-gray-900">{formatDateTime(task.dueAt)}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-600">Time Remaining</p>
              <Countdown deadline={task.dueAt} className="font-semibold text-gray-900 text-base" />
            </div>
          </div>
        </div>

        {/* Progress */}
        {task.progress > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{task.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-primary h-3 rounded-full transition-all"
                style={{ width: `${task.progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Source */}
        {task.source && (
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Source</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-700 mb-2">
                {task.source.file} {task.source.page && `— Page ${task.source.page}`}
              </p>
              <p className="text-sm text-gray-600 italic">{task.source.snippet}</p>
            </div>
          </div>
        )}

        {/* Actions */}
        {task.status === 'pending' && (
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Accountability Mode</h3>
            <p className="text-sm text-gray-600 mb-4">
              Coming in Phase 6: Turn on accountability mode to receive escalating reminders until
              you mark this task as submitted.
            </p>
            <div className="flex gap-3">
              <Button>Mark as Submitted</Button>
              <Button variant="secondary">Edit Task</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
