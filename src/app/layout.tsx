import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "../components/ui/app-sidebar";
import { SidebarProvider } from "../components/ui/sidebar";
import { Toaster } from "../components/ui/toaster";

export const metadata: Metadata = {
  title: "Boost companion",
  description: "A tool for lazy booster people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className={"w-full"}>{children}</main>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
