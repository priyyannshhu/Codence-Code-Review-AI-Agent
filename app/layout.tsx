import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Codence – Code Review AI Agent",
  description: "Codence is your AI-powered assistant to review and improve code with instant insights, suggestions, and best practices.",
  icons: {
    icon: "/favicon.ico", // Make sure you place favicon.ico in the `public` folder
  },
  themeColor: "#f5f7fa",
  authors: [
    { name: "Priyanshu Vishwakarma", url: "https://github.com/priyyannshhu" },
  ],
  keywords: ["AI Code Review", "Codence", "Code Assistant", "Code Quality", "Next.js AI Agent"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
           <body className={`${urbanist.variable} antialiased`}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
