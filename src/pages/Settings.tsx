import { Settings as SettingsIcon } from 'lucide-react';

export function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <SettingsIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Settings Coming in Phase 9</h2>
        <p className="text-gray-600">
          Manage your profile, notification preferences, and parent contacts.
        </p>
      </div>
    </div>
  );
}
