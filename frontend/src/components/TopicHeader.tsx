"use client";

import { useAppContext } from "@/context";
import Image from "next/image";
import WebCam from "./WebCam";

const TopicHeader = () => {
  const { state } = useAppContext();

  return (
    <div className="flex gap-4 justify-between">
      <div className="flex gap-4 justify-center">
        <div className="relative aspect-square bg-white rounded-lg">
          <Image
            src={state.currentTopic.logo}
            alt="Logo"
            layout="fill"
            className="p-4"
          />
        </div>
        <h1 className="text-3xl font-bold text-blue-500">
          {state.currentTopic.title} Mock Interview
        </h1>
      </div>
      <WebCam />
    </div>
  );
};

export default TopicHeader;
