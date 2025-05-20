import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "HSR Quiz",
  description: "Quiz page",
  icons:{
    icon: "./favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
