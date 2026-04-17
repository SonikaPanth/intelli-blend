import AiModelList from "@/shared/AiModelList";
import Image from "next/image";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Lock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

function AiMultiModels() {
  const [aiModelList, setAiModelList] = useState(AiModelList);

  const onToggleChange = (model, value) => {
    setAiModelList((prev) =>
      prev.map((m) => (m.model === model ? { ...m, enable: value } : m)),
    );
  };

  return (
    <div className="flex flex-1 h-[75vh] border-b">
      {aiModelList.map((model, index) => (
        <div
          key={model.model || index}
          className={`flex flex-col border-r h-full overflow-auto  mt-5 ${model.enable ? "min-w-[400px]" : "min-w-[100px]"} `}
        >
          <div className="w-full flex justify-center items-center border-b p-4 h-[70px] ">
            <div className="flex items-center justify-center gap-4">
              <Image
                src={model.icon}
                alt={model.model}
                height={24}
                width={24}
              />
              {model.enable && (
                <Select>
                  <SelectTrigger className="w-45">
                    <SelectValue placeholder={model.subModel[0].name} />
                  </SelectTrigger>
                  <SelectContent>
                    {model.subModel.map((submodel, idx) => (
                      <SelectItem key={idx} value={submodel.name}>
                        {submodel.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              <div>
                {model.enable ? (
                  <Switch
                    checked={model.enable}
                    onCheckedChange={(v) => onToggleChange(model.model, v)}
                  />
                ) : (
                  <MessageSquare
                    onClick={() => onToggleChange(model.model, true)}
                  />
                )}
              </div>
            </div>
          </div>
          {model.premium && model.enable && (
            <div className=" flex items-center justify-center h-full">
              <Button>
                {" "}
                <Lock />
                Upgrade to premium
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AiMultiModels;
