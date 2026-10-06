import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Calendar, Bell, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDemoStore } from '@/store/demo-store';

const navigation = [
  { name: 'Dashboard', href: '/student/dashboard', icon: LayoutDashboard },
  { name: 'Tasks', href: '/student/tasks', icon: CheckSquare },
  { name: 'Calendar', href: '/student/calendar', icon: Calendar },
  { name: 'Alerts', href: '/student/notifications', icon: Bell },
  { name: 'Settings', href: '/student/settings', icon: Settings },
];

export function BottomNav() {
  const location = useLocation();
  const notifications = useDemoStore((state) => state.notifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div className="flex items-center justify-around h-16">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          const showBadge = item.href === '/notifications' && unreadCount > 0;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex flex-col items-center justify-center flex-1 h-full relative',
                isActive ? 'text-primary' : 'text-gray-600'
              )}
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{item.name}</span>
              {showBadge && (
                <span className="absolute top-2 right-1/4 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-600 rounded-full">
                  {unreadCount}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
