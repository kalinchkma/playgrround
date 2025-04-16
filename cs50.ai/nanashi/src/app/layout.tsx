import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/provider/theme-provider";
import ThemeChanger from "@/components/common/theme-changer";

const roboto = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin", "greek"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} antialiased bg-zinc-100 dark:bg-zinc-900`}
      >
        <ThemeProvider 
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeChanger className="absolute right-5 bottom-5" />
        </ThemeProvider>
      </body>
    </html>
  );
}
