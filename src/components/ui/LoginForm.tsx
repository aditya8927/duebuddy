import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Input } from './Input';

interface DemoAccount {
  email: string;
  password: string;
}

interface LoginFormProps {
  title: string;
  subtitle: string;
  demo: DemoAccount;
  onBack: () => void;
  onSubmit: (email: string, password: string) => Promise<boolean>;
  redirectOnSuccess: () => void;
}

export function LoginForm({
  title,
  subtitle,
  demo,
  onBack,
  onSubmit,
  redirectOnSuccess,
}: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fillDemo = () => {
    setEmail(demo.email);
    setPassword(demo.password);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const ok = await onSubmit(email, password);
    if (ok) {
      redirectOnSuccess();
    } else {
      setError('Incorrect email or password. Try the demo button below.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">

      {/* Back */}
      <div className="w-full max-w-md mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl p-8 shadow-sm">

        {/* Logo word mark */}
        <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-7">
          DeadlineAI
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-1">{title}</h2>
        <p className="text-sm text-slate-500 mb-8">{subtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 px-3 py-2.5 rounded-lg">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors mt-2"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        {/* Demo shortcut */}
        <div className="mt-6 pt-5 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400 mb-3">
            This is a demo. Click below to fill credentials automatically.
          </p>
          <button
            type="button"
            onClick={fillDemo}
            className="w-full py-2.5 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
          >
            Use demo account
          </button>
          <p className="text-xs text-slate-400 font-mono mt-2">
            {demo.email} · {demo.password}
          </p>
        </div>
      </div>
    </div>
  );
}
