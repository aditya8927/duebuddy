import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CountdownProps {
  deadline: string | Date;
  format?: 'long' | 'short';
  showIcon?: boolean;
  className?: string;
}

export function Countdown({ deadline, format = 'long', showIcon = false, className }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const due = new Date(deadline).getTime();
      const diff = due - now;

      if (diff < 0) {
        setTimeLeft('Overdue');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (format === 'short') {
        if (days > 0) setTimeLeft(`${days}d ${hours}h`);
        else if (hours > 0) setTimeLeft(`${hours}h ${minutes}m`);
        else setTimeLeft(`${minutes}m ${seconds}s`);
      } else {
        const parts = [];
        if (days > 0) parts.push(`${days}d`);
        if (hours > 0) parts.push(`${hours}h`);
        if (minutes > 0) parts.push(`${minutes}m`);
        if (seconds > 0 && days === 0) parts.push(`${seconds}s`);
        setTimeLeft(parts.join(' '));
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [deadline, format]);

  return (
    <span className={cn('inline-flex items-center gap-1.5 font-mono text-sm', className)}>
      {showIcon && <Clock className="w-4 h-4" />}
      {timeLeft}
    </span>
  );
}
