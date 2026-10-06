import { Button } from '@/components/ui/Button';
import { CheckCircle, Upload, Brain, Bell, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Upload,
      title: 'Upload Notices',
      description: 'Drag & drop college notices, PDFs, or images',
    },
    {
      icon: Brain,
      title: 'AI Extraction',
      description: 'Automatically detect deadlines and events',
    },
    {
      icon: Bell,
      title: 'Smart Reminders',
      description: 'Escalating alerts until you mark tasks complete',
    },
    {
      icon: Target,
      title: 'Never Miss',
      description: 'Stay on top of every academic deadline',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Never Miss an Academic <br />
            <span className="text-primary">Deadline Again</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't just remember deadlines. Finish them. DeadlineAI keeps you accountable with
            AI-powered extraction and smart reminders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/dashboard')}>
              Get Started Free
            </Button>
            <Button size="lg" variant="secondary" onClick={() => navigate('/upload')}>
              Try Demo ✨
            </Button>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {index + 1}. {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Built for College Students
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'AI extracts deadlines from any format',
              'Conflict detection for overlapping work',
              'Escalating reminders (in-app, email, WhatsApp)',
              'Parent escalation for critical deadlines',
              'Calendar view with workload heatmap',
              'Privacy-first: your data stays yours',
            ].map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to never miss a deadline?
          </h2>
          <Button size="lg" onClick={() => navigate('/dashboard')}>
            Start Using DeadlineAI
          </Button>
        </div>
      </div>
    </div>
  );
}
