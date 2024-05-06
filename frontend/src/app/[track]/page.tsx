"use client";

import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";

export default function Home() {
  const { track } = useParams();
  const search = useSearchParams();
  const level = search.get("level");

  return (
    <main className="p-8 flex flex-col justify-between h-full">
      <div className="flex gap-4">
        <Image
          src="/images/tests/node.png"
          alt="Logo"
          width={200}
          height={200}
        />
        <h1 className="text-3xl font-bold text-center">AI Mock Interview</h1>
      </div>
      <div>
        <h1>Question:</h1>
        <p>What is the difference between var, let, and const?</p>

      </div>
      <div className="flex gap-4">
        <textarea className="w-5/6 text-black" />
        <div className="flex flex-col items-start gap-2 w-1/6">
          <button className="bg-blue-400 px-4 py-2 w-full">Start Record</button>
          <button className="bg-blue-400 px-4 py-2 w-full">Stop Record</button>
          <button className="bg-blue-400 px-4 py-2 w-full">Submit</button>
          <button className="bg-blue-400 px-4 py-2 w-full">Clear</button>
        </div>
      </div>
    </main>
  );
}
