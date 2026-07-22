import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aurora Web',
  description: 'A Next.js app created for Aurora.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
