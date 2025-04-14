import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Roleplay Tutor',
  description: 'AI-powered conversational English learning tool',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}




