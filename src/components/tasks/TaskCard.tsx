import { Calendar, BookOpen } from 'lucide-react';
import { PriorityBadge } from './PriorityBadge';
import { Countdown } from './Countdown';
import { formatDateTime } from '@/lib/utils';
import { cn } from '@/lib/utils';
import type { Task } from '@/types';

interface TaskCardProps {
  task: Task;
  variant?: 'default' | 'compact';
  onClick?: () => void;
  className?: string;
}

export function TaskCard({ task, variant = 'default', onClick, className }: TaskCardProps) {
  const isCompact = variant === 'compact';

  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer',
        className
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{task.title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
            <BookOpen className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{task.subject}</span>
          </div>
        </div>
        <PriorityBadge priority={task.priority} size={isCompact ? 'sm' : 'md'} />
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1.5 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{formatDateTime(task.dueAt)}</span>
        </div>
        <Countdown deadline={task.dueAt} format="short" className="text-gray-700 font-semibold" />
      </div>

      {task.progress > 0 && (
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
            <span>Progress</span>
            <span>{task.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${task.progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
