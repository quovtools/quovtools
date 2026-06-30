'use client';

import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
            <p className="text-slate-600 mb-4">{error.message}</p>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={reset}
            >
              Try again
            </button>
            <Link href="/" className="block mt-4 text-slate-600 hover:underline">
              Go home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}