import { Calendar as CalendarIcon } from 'lucide-react';

export function Calendar() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Calendar</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <CalendarIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Calendar Coming Soon</h2>
        <p className="text-gray-600">
          View your deadlines in Day, Week, and Month views with workload heatmap.
        </p>
      </div>
    </div>
  );
}
