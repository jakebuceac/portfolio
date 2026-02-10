import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Footer } from "@/app/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Jake Buceac | Software Engineer',
  description: 'Software Engineer based in Bournemouth, UK, specializing in architecting scalable web applications, robust APIs, and end-to-end systems with PHP, Go, and TypeScript.',
  keywords: [
    'Software Engineer', 
    'Full Stack Developer', 
    'PHP Developer', 
    'Bournemouth Engineer', 
    'Laravel', 
    'Go', 
    'System Architecture'
  ],
  authors: [{ name: 'Jake Buceac' }],
  openGraph: {
    title: 'Jake Buceac | Software Engineer',
    description: 'Architecting scalable applications and robust APIs.',
    url: 'https://yourportfolio.com', // Replace with your domain
    siteName: 'Jake Buceac Portfolio',
    images: [
      {
        url: '/og-image.png', // Create a simple 1200x630 image
        width: 1200,
        height: 630,
        alt: 'Jake Buceac | Software Engineer',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jake Buceac | Software Engineer',
    description: 'Software Engineer building reliable systems and polished applications.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="flex justify-center pt-20 flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
