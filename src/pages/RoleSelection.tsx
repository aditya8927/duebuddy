import { useNavigate } from 'react-router-dom';
import { RoleCard } from '@/components/ui/RoleCard';

export function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">

      {/* Brand */}
      <div className="text-center mb-12">
        <span className="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide">
          Academic Accountability
        </span>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">DeadlineAI</h1>
        <p className="text-slate-500 text-base max-w-sm mx-auto">
          Don't just remember deadlines. Finish them.
        </p>
      </div>

      {/* Prompt */}
      <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-6">
        Continue as
      </p>

      {/* Role cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
        <RoleCard
          role="Teacher"
          description="Create assignments, set deadlines, upload notices and track student submissions."
          onClick={() => navigate('/teacher/login')}
        />
        <RoleCard
          role="Student"
          description="View deadlines, enable reminders and mark your work as submitted."
          onClick={() => navigate('/student/login')}
        />
      </div>

      <p className="text-slate-400 text-xs mt-10">Demo mode · no sign-up required</p>
    </div>
  );
}
