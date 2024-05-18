"use client";

import { use, useEffect, useState } from "react";
import Answer from "@/components/Answer";
import Question from "@/components/Question";
import TopicHeader from "@/components/TopicHeader";
import { useAppContext } from "@/context";
import { useParams, useSearchParams } from "next/navigation";

export default function Home() {
  const { track } = useParams();
  const search = useSearchParams();
  const level = search.get("level");

  // common states
  const [loading, setLoading] = useState<boolean>(false);

  const { dispatch } = useAppContext();

  useEffect(() => {
    setLoading(true);
    dispatch({
      type: "SET_INITIAL_LEVEL_AND_TOPIC",
      payload: {
        level: level,
        topic: track,
      },
    });
    setLoading(false);
  }, [dispatch, level, track]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-4xl font-bold text-blue-400">
        Loading...
      </div>
    );
  }

  return (
    <main className="p-8 flex flex-col justify-between h-full">
      <TopicHeader />
      <Question />
      <Answer />
    </main>
  );
}
