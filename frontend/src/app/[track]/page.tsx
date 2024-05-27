"use client";

import Answer from "@/components/Answer";
import Question from "@/components/Question";
import TopicHeader from "@/components/TopicHeader";

export default function Home() {
  return (
    <main className="p-8 flex flex-col justify-between h-full">
      <div className="flex flex-col gap-8">
        <TopicHeader />
        <Question />
      </div>
      <Answer />
    </main>
  );
}
