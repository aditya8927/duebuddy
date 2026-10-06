import { BarChart3 } from 'lucide-react';

export function Analytics() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Analytics</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Analytics Coming in Phase 9</h2>
        <p className="text-gray-600">
          Track your consistency score, completion rate, and productivity insights.
        </p>
      </div>
    </div>
  );
}
