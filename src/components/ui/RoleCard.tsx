import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoleCardProps {
  role: string;
  description: string;
  onClick: () => void;
  className?: string;
}

export function RoleCard({ role, description, onClick, className }: RoleCardProps) {
  return (
    <button
      onClick={onClick}
      aria-label={`Continue as ${role}`}
      className={cn(
        'group w-full text-left p-7 rounded-xl',
        'bg-white border border-slate-200',
        'hover:border-indigo-500 hover:shadow-md',
        'transition-all duration-150',
        'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
        className
      )}
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{role}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-6">{description}</p>
      <div className="flex items-center gap-1.5 text-indigo-600 text-sm font-medium group-hover:gap-2.5 transition-all">
        <span>Continue</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  );
}
