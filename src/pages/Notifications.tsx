import { Bell } from 'lucide-react';
import { useDemoStore } from '@/store/demo-store';
import { formatDateTime } from '@/lib/utils';
import { cn } from '@/lib/utils';

export function Notifications() {
  const notifications = useDemoStore((state) => state.notifications);
  const markNotificationRead = useDemoStore((state) => state.markNotificationRead);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Notifications</h1>

      {notifications.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No notifications</h2>
          <p className="text-gray-600">You're all caught up!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={cn(
                'bg-white rounded-lg border p-4 cursor-pointer hover:shadow-md transition-shadow',
                notification.read ? 'border-gray-200' : 'border-primary/30 bg-primary/5'
              )}
              onClick={() => markNotificationRead(notification.id)}
            >
              <div className="flex items-start gap-3">
                <Bell className={cn('w-5 h-5 mt-0.5', notification.read ? 'text-gray-400' : 'text-primary')} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900">{notification.message}</p>
                  <p className="text-sm text-gray-600 mt-1">{formatDateTime(notification.createdAt)}</p>
                </div>
                {!notification.read && (
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
