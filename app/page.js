"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";
import ChatInputBox from "./_component/chatInputBox";

const page = () => {
  const { setTheme } = useTheme();
  return (
    <div>
      <ChatInputBox />
    </div>
  );
};

export default page;
