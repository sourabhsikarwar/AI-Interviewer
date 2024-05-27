import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import AppProvider from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Interviewer",
  description: "Practice AI Interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <div className="w-3/12 bg-white">
            <Sidebar />
          </div>
          <AppProvider>
            <div className="w-9/12 bg-blue-50">{children}</div>
          </AppProvider>
        </div>
      </body>
    </html>
  );
}
