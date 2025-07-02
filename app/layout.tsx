import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "AvantDev Technologies",
  icons: {
  icon: "/AvantDev-Technologies/public/favicon.ico",
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/AvantDev-Technologies/public/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
