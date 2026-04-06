"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./_component/appSidebar";
import AppHeader from "./_component/appHeader";

export default function Provider({ children, ...props }) {
  return (
    <NextThemesProvider attribute="class" {...props}>
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar />
          <main className="flex-1 p-4<">
            <AppHeader />

            {children}
          </main>
        </div>
      </SidebarProvider>
    </NextThemesProvider>
  );
}
