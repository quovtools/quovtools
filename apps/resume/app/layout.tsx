import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechResume',
  description: 'AI Resume Optimizer for Tech',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}