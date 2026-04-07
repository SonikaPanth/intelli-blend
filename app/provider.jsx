"use client";

import React, { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./_component/appSidebar";
import AppHeader from "./_component/appHeader";
import { useUser } from "@clerk/nextjs";
import { db } from "@/config/FireBaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Provider({ children, ...props }) {
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      CreateUser();
    }
  }, [user]);
  const CreateUser = async () => {
    const userRef = doc(db, "user", user?.primaryEmailAddress.emailAddress);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      console.log("user already exists");
    }

    const userData = {
      name: user?.fullName,
      email: user?.primaryEmailAddress.emailAddress,
      createdAt: new Date(),
      remainingMsg: 5,
      plan: "Free",
      credit: 1000,
    };
    await setDoc(userRef, userData);
    console.log(userData, "new user data");
  };

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
