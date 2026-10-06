import { AlertCircle, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { TaskPriority } from '@/types';

interface PriorityBadgeProps {
  priority: TaskPriority;
  showIcon?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

const priorityConfig = {
  critical: {
    label: 'Critical',
    icon: AlertCircle,
    colors: 'bg-red-100 text-red-700 border-red-200',
  },
  high: {
    label: 'High',
    icon: AlertTriangle,
    colors: 'bg-amber-100 text-amber-700 border-amber-200',
  },
  medium: {
    label: 'Medium',
    icon: Info,
    colors: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  low: {
    label: 'Low',
    icon: CheckCircle,
    colors: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  },
};

export function PriorityBadge({ priority, showIcon = true, size = 'md', className }: PriorityBadgeProps) {
  const config = priorityConfig[priority];
  const Icon = config.icon;
  
  const sizeStyles = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-sm';
  const iconSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';
  
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md font-medium border',
        config.colors,
        sizeStyles,
        className
      )}
    >
      {showIcon && <Icon className={iconSize} />}
      {config.label}
    </span>
  );
}
