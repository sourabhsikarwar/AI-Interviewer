"use client";

import { useAppContext } from "@/context";
import Link from "next/link";

export default function Instructions() {
  const { state } = useAppContext();

  return (
    <div>
      <h1>Instructions</h1>
      <p>Instructions to be added here</p>
      <Link
        href={`/${state.currentTopic.relative_path}?level=${state.currentLevel}`}
      >
        Start Interview
      </Link>
    </div>
  );
}
