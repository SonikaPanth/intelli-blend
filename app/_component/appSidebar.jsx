"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Bolt, Moon, Sun, User2, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import UsageCreditProgress from "./usageCreditProgress";

export default function AppSidebar() {
  const { theme, setTheme } = useTheme();
  const { user } = useUser();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-3">
          <div className=" flex items-center justify-center gap-2">
            <div className="flex items-center gap-3">
              <Image
                src={"./logo.svg"}
                height={60}
                width={60}
                alt="logo"
                className="w-[40px] h-[40px]"
              />
              <h2 className="font-bold text-xl">Intelli Blend</h2>
            </div>
            <div>
              {theme == "light" ? (
                <Button variant="ghost" onClick={() => setTheme("dark")}>
                  <Sun />
                </Button>
              ) : (
                <Button variant="ghost" onClick={() => setTheme("light")}>
                  <Moon />
                </Button>
              )}
            </div>
          </div>
          {user ? (
            <Button className="mt-7 w-full">+ New Chat</Button>
          ) : (
            <SignInButton mode="modal">
              <Button className="mt-7 w-full">+ New Chat</Button>
            </SignInButton>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-3">
            <h2 className="font-bold text-lg">Chats</h2>
            {!user && (
              <p className="text-gray-600 text-sm">
                Chat with multiple ai agents
              </p>
            )}
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-3 mb-10">
          {!user ? (
            <SignInButton mode="modal">
              <Button className="w-full ">SignIn/SignUp</Button>
            </SignInButton>
          ) : (
            <div className="gap-4 flex flex-col">
              <UsageCreditProgress />
              <Button className="w-full">
                <Zap />
                Upgrade Plan
              </Button>
              <Button className="flex gap-5 w-full bg-gray-300 text-black">
                <User2 /> <h2>Settings</h2>
              </Button>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
