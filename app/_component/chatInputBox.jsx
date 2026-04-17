import { Button } from "@/components/ui/button";
import { Mic, Paperclip, Send } from "lucide-react";
import React from "react";
import AiMultiModels from "./aiMultiModels";

function chatInputBox() {
  return (
    <div>
      {/* Page content */}
      <div>
        <AiMultiModels />
      </div>

      {/* chat input box */}
      <div className="fixed bottom-0 w-full left-0 flex justify-center">
        <div className=" w-full border rounded-xl shadow-md max-w-2xl mx-4 mb-4  p-4">
          <input
            type="text"
            placeholder="Ask me anyhting"
            className="border-0 outline-none"
          />
          <div className="mt-3 justify-between items-center flex">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-5 w-5" />
            </Button>
            <div className="flex gap-5">
              <Button variant="ghost" size="icon">
                <Mic />
              </Button>
              <Button size="icon">
                <Send />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default chatInputBox;
