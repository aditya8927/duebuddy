import { MessageSquare } from 'lucide-react';

export function AIAssistant() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">AI Assistant</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">AI Assistant Coming in Phase 9</h2>
        <p className="text-gray-600">
          Chat with AI to get study plans, deadline advice, and time management tips.
        </p>
      </div>
    </div>
  );
}
