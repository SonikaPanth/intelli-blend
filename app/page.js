"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";

const page = () => {
  const { setTheme } = useTheme();
  return (
    <div>
      <h1>Hello</h1>
      <Button>click</Button>
      <Button onClick={() => setTheme("light")}>Light mode</Button>
      <Button onClick={() => setTheme("dark")}>Dark mode</Button>
    </div>
  );
};

export default page;
