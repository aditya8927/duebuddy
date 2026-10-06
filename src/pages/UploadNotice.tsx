import { Button } from '@/components/ui/Button';
import { Upload } from 'lucide-react';

export function UploadNotice() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Upload Notice</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Upload Phase Coming in Phase 3
        </h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Drag & drop PDFs, images, or paste text to extract deadlines automatically with AI.
        </p>
        <Button variant="secondary">Choose File</Button>
      </div>
    </div>
  );
}
