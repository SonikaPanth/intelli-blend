"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./_component/appSidebar";

export default function Provider({ children, ...props }) {
  return (
    <NextThemesProvider attribute="class" {...props}>
      <SidebarProvider>
        <div className="flex">
          <AppSidebar />
          <main className="flex-1 p-4">
            <SidebarTrigger />
            {children}
          </main>
        </div>
      </SidebarProvider>
    </NextThemesProvider>
  );
}
