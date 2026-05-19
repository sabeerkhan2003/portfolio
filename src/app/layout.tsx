import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/providers/ThemeProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sabeerkhan.dev"
  ),
  title: "Sabeer Khan | Frontend Developer Portfolio",
  description:
    "Portfolio of Sabeer Khan — Frontend Developer specializing in React, TypeScript, and full-stack web development.",
  keywords: [
    "Sabeer Khan",
    "Frontend Developer",
    "React Developer",
    "Portfolio",
    "Web Developer",
    "Chennai",
  ],
  authors: [{ name: "Sabeer Khan", url: "https://github.com/sabeerkhan2003" }],
  openGraph: {
    title: "Sabeer Khan | Frontend Developer",
    description:
      "Frontend Developer with full-stack experience. Explore projects, skills, and get in touch.",
    type: "website",
    locale: "en_US",
    siteName: "Sabeer Khan Portfolio",
    images: [
      {
        url: "/images/professional.jpeg",
        width: 320,
        height: 320,
        alt: "Sabeer Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabeer Khan | Frontend Developer",
    description: "Portfolio of Sabeer Khan — React & full-stack web developer.",
    images: ["/images/professional.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins`}>
        <ThemeProvider>
          <Navigation />
          <main className="overflow-x-hidden scroll-smooth max-md:h-auto max-md:min-h-0 max-md:overflow-visible md:h-dvh md:overflow-y-auto md:snap-y md:snap-mandatory md:pb-0 md:pl-28">
            {children} 
          </main>
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
