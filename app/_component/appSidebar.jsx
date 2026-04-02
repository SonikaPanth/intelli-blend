import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function AppSidebar() {
  const { theme, setTheme } = useTheme();
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
          <Button className="mt-7 w-full">+ New Chat</Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-3">
            <h2 className="font-bold text-lg">Chats</h2>
            <p className="text-gray-600 text-sm">
              Chat with multiple ai agents
            </p>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-3 mb-10">
          <Button className="w-full ">SignIn/SignUp</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
