import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CaptionAI',
  description: 'AI Social Media Caption Generator',
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