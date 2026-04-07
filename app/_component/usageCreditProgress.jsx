import { Progress } from "@/components/ui/progress";
import React from "react";

function UsageCreditProgress() {
  return (
    <div className="border p-4 rounded-md bg-gray-300 flex flex-col gap-4">
      <h2 className="font-bold text-2xl">Free Plan</h2>
      <p className="text-gray-400">credit Usage</p>
      <Progress value={4} />
    </div>
  );
}

export default UsageCreditProgress;
