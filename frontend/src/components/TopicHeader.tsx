"use client";

import { useAppContext } from "@/context";
import Image from "next/image";

const TopicHeader = () => {
  const { state } = useAppContext();
  
  return (
    <div className="flex gap-4">
      <Image src="/images/tests/node.png" alt="Logo" width={200} height={200} />
      <h1 className="text-3xl font-bold text-center">AI Mock Interview</h1>
    </div>
  );
};

export default TopicHeader;
